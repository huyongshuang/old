let deployResults = [];
let deployInProgress = false;
let errorLogs = [];
let originalStderrWrite;
let originalStdoutWrite;
let currentDeployIndex = null;
let configExecutionOrder = [];

hexo.on('deployBefore', function() {
  deployInProgress = true;
  errorLogs = [];
  deployResults = [];
  currentDeployIndex = null;
  configExecutionOrder = [];
  
  const now = new Date();
  const commitMsg = `Blog Update: ${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  let deployConfigs = [];
  if (Array.isArray(hexo.config.deploy)) {
    deployConfigs = hexo.config.deploy;
  } else if (hexo.config.deploy) {
    deployConfigs = [hexo.config.deploy];
  }

  console.log(`\n📋 发现 ${deployConfigs.length} 个部署配置\n`);

  deployConfigs.forEach((config, index) => {
    const configNum = index + 1;
    const repo = config.repo || config.repo_url || config.repository || '';
    const type = config.type || '';
    const isGit = type.trim().toLowerCase() === 'git';
    const isValid = isGit && !!repo;
    
    if (isValid) {
      config.message = commitMsg;
      console.log(`✅ 已为第 ${configNum} 个配置设置提交信息: ${commitMsg}`);
    }
    
    deployResults.push({
      index: configNum,
      type: type || '未知',
      repo: repo,
      branch: config.branch || 'gh-pages',
      success: isValid,
      isGit: isGit,
      isValid: isValid,
      startTime: new Date(),
      endTime: null,
      duration: null,
      error: null,
      errorType: null,
      repoIdentifier: extractRepoIdentifier(repo),
      repoName: extractRepoName(repo),
      executed: false
    });
  });

  deployResults.forEach(result => {
    if (result.isGit && !result.isValid) {
      console.log(`⚠️  第 ${result.index} 个配置无效：Git类型但缺少仓库地址`);
    } else if (!result.isGit) {
      console.log(`ℹ️  第 ${result.index} 个配置类型：${result.type}（非Git部署，将跳过检测）`);
    }
  });

  originalStderrWrite = process.stderr.write;
  originalStdoutWrite = process.stdout.write;
  
  const removeColors = (text) => {
    if (typeof text !== 'string') return text;
    return text.replace(/\x1B\[\d+m/g, '');
  };
  
  process.stderr.write = function(chunk, encoding, callback) {
    let log = typeof chunk === 'string' ? chunk : chunk.toString('utf8');
    const cleanLog = removeColors(log);
    if (cleanLog.trim()) {
      if (!errorLogs.includes(cleanLog.trim())) errorLogs.push(cleanLog.trim());
      updateCurrentDeployIndex(cleanLog);
    }
    return originalStderrWrite.apply(process.stderr, [chunk, encoding, callback]);
  };
  
  process.stdout.write = function(chunk, encoding, callback) {
    let log = typeof chunk === 'string' ? chunk : chunk.toString('utf8');
    const cleanLog = removeColors(log);
    if (cleanLog.includes('Error:') || cleanLog.includes('fatal:') || cleanLog.includes('error:')) {
      if (!errorLogs.includes(cleanLog.trim())) errorLogs.push(cleanLog.trim());
      updateCurrentDeployIndex(cleanLog);
    }
    return originalStdoutWrite.apply(process.stdout, [chunk, encoding, callback]);
  };
});

hexo.on('deployAfter', function() {
  if (!deployInProgress) return;
  
  console.log('\n🚀 所有部署任务执行完成，开始分析结果...');
  
  deployResults.forEach(config => {
    if (config.isGit && config.isValid && !config.executed) {
      config.executed = true;
      config.endTime = new Date();
      config.duration = (config.endTime - config.startTime) / 1000;
    }
  });
  
  finalizeDeployResults();
});

function finalizeDeployResults() {
  if (originalStderrWrite) process.stderr.write = originalStderrWrite;
  if (originalStdoutWrite) process.stdout.write = originalStdoutWrite;
  
  console.log(`\n🔍 开始执行最终部署状态检查...`);
  
  const errorKeywords = [
    'fatal:', 'error:', 'Spawn failed', 'Could not resolve host', 
    'Permission denied', 'repository not found', 'failed to push',
    'remote:', 'ssh:', 'fatal error', 'Error:'
  ];

  const validGitConfigs = deployResults.filter(r => r.isGit && r.isValid);
  validGitConfigs.forEach(config => {
    if (!config.endTime) {
      config.endTime = new Date();
      config.duration = (config.endTime - config.startTime) / 1000;
    }

    const configError = findConfigSpecificError(config, errorKeywords);
    
    if (configError) {
      config.success = false;
      config.error = cleanErrorText(configError);
      
      if (config.error.includes('Could not resolve host') || config.error.includes('Could not connect to')) {
        config.errorType = 'host_resolve_error';
      } else if (config.error.includes('Spawn failed')) {
        config.errorType = 'spawn_error';
      } else if (config.error.includes('Permission denied')) {
        config.errorType = 'permission_error';
      } else if (config.error.includes('repository not found')) {
        config.errorType = 'repo_not_found';
      } else if (config.error.includes('failed to push') || config.error.includes('remote:')) {
        config.errorType = 'push_error';
      } else {
        config.errorType = 'git_fatal';
      }
      
      console.log(`❌ 判定结果：第 ${config.index} 个配置部署失败`);
      console.log(`   错误信息：${truncateText(config.error, 80)}`);
    } else {
      config.success = true;
      console.log(`✅ 判定结果：第 ${config.index} 个配置部署成功`);
    }
  });

  const invalidConfigs = deployResults.filter(r => !r.isGit || !r.isValid);
  invalidConfigs.forEach(config => {
    if (!config.endTime) {
      config.endTime = new Date();
      config.duration = (config.endTime - config.startTime) / 1000;
    }
    
    if (!config.isGit) {
      config.error = '非Git部署类型，跳过检测';
      config.errorType = 'non_git';
    } else if (!config.isValid) {
      config.error = 'Git配置无效（type为空或缺少repo）';
      config.errorType = 'invalid_git';
    }
  });

  displayFinalResults();
  deployInProgress = false;
}

process.on('exit', function(code) {
  if (!deployInProgress || deployResults.length === 0) return;
  
  const hasValidGit = deployResults.some(r => r.isGit && r.isValid);
  if (hasValidGit) {
    finalizeDeployResults();
  }
});

process.on('uncaughtException', function(err) {
  console.error('\n💥 捕获未处理异常：', err.message);
  const errMsg = cleanErrorText(`Exception: ${err.message}`);
  errorLogs.push(errMsg);
  
  if (currentDeployIndex !== null && deployResults[currentDeployIndex - 1]) {
    deployResults[currentDeployIndex - 1].error = errMsg;
    deployResults[currentDeployIndex - 1].errorType = 'git_fatal';
  }
});

process.on('unhandledRejection', function(reason) {
  console.error('\n💥 捕获Promise拒绝：', reason?.message || reason);
  const errMsg = cleanErrorText(`Rejection: ${reason?.message || String(reason)}`);
  errorLogs.push(errMsg);
  
  if (currentDeployIndex !== null && deployResults[currentDeployIndex - 1]) {
    deployResults[currentDeployIndex - 1].error = errMsg;
    deployResults[currentDeployIndex - 1].errorType = 'git_fatal';
  }
});

function displayFinalResults() {
  const line = '='.repeat(80);
  const subLine = '-'.repeat(80);
  console.log(`\n${line}`);
  console.log('📜 Hexo Git部署结果报告'.padStart(45));
  console.log(`${line}`);

  const total = deployResults.length;
  const gitTotal = deployResults.filter(r => r.isGit).length;
  const gitValid = deployResults.filter(r => r.isGit && r.isValid).length;
  const success = deployResults.filter(r => r.success).length;
  const fail = deployResults.filter(r => r.isGit && r.isValid && !r.success).length;
  const skip = total - gitValid;

  console.log(`\n📈 部署统计：`);
  console.log(`   总配置数：${total} | Git配置数：${gitTotal} | 有效Git配置：${gitValid}`);
  console.log(`   部署成功：${success} | 部署失败：${fail} | 跳过部署：${skip}`);

  console.log(`\n${subLine}`);
  console.log(`📋 详细部署结果：\n`);

  deployResults.forEach(result => {
    let icon, status;
    if (!result.isGit) {
      icon = '🔵';
      status = '【跳过】非Git部署';
    } else if (!result.isValid) {
      icon = '🚫';
      status = '【无效】Git配置无效';
    } else if (result.success) {
      icon = '✅';
      status = '【成功】Git部署完成';
    } else {
      icon = '❌';
      status = '【失败】Git部署中断';
    }

    console.log(`${icon} 第 ${result.index} 个配置：${status}`);
    console.log(`   ├─ 部署类型：${result.type}`);
    console.log(`   ├─ 仓库地址：${result.repo || '未配置'}`);
    if (result.isGit) {
      console.log(`   ├─ 部署分支：${result.branch}`);
      console.log(`   ├─ 耗时：${result.duration ? result.duration.toFixed(2) + '秒' : '未记录'}`);
    }
    if (!result.success && result.error) {
      const shortError = getShortError(result.error);
      console.log(`   ├─ 失败原因：${shortError}`);
      console.log(`   └─ 解决建议：`);
      console.log(getSolveSuggestion(result.errorType));
    }
    console.log('');
  });

  console.log(`${line}`);
  if (success === gitValid && gitValid > 0) {
    console.log('🎉 所有有效Git配置均部署成功！');
  } else if (gitValid === 0) {
    console.log('⚠️  无有效Git部署配置，请检查_config.yml！');
  } else if (fail > 0 && success > 0) {
    console.log(`⚠️  部分部署失败（成功${success}个，失败${fail}个），请根据上述建议排查！`);
  } else if (fail > 0 && success === 0) {
    console.log(`❌ 全部部署失败（失败${fail}个），请根据上述建议排查！`);
  }
  console.log(`${line}\n`);
}

function getSolveSuggestion(errorType) {
  const suggestions = {
    host_resolve_error: `   1. 检查仓库地址是否有拼写错误（如你的日志里是123.com）
   2. 修正repo地址为正确格式：https://github.com/用户名/仓库名.git
   3. 检查网络DNS解析：ping 目标域名`,
    spawn_error: `   1. 检查Git是否安装：git --version
   2. 确认Git已添加到系统环境变量
   3. 重启终端或电脑后重试`,
    permission_error: `   1. 测试SSH连接：ssh -T git@github.com
   2. 改用HTTPS格式repo地址避免权限问题
   3. 确认账号有仓库写入权限`,
    repo_not_found: `   1. 检查repo地址拼写是否正确
   2. 确认远程仓库已创建（私有仓库需授权）
   3. 核对地址格式（SSH/HTTPS）`,
    push_error: `   1. 执行 hexo clean 清理缓存
   2. 强制推送：hexo clean && hexo d -f
   3. 拉取远程分支：cd .deploy_git && git pull`,
    git_fatal: `   1. 查看详细日志：hexo d --verbose
   2. 删除 .deploy_git 目录后重试
   3. 检查Git命令是否正常执行`,
    invalid_git: `   1. 检查_config.yml中该配置的type字段：必须为git
   2. 补充repo字段：例如 repo: https://github.com/用户名/仓库名.git
   3. 移除无效的空配置项（建议删除第二个配置）`,
    non_git: `   1. 仅支持Git部署检测，非Git类型自动跳过
   2. 如需检测其他部署类型，请扩展脚本`,
    default: `   1. 基础排查：hexo clean → 重启终端 → hexo d
   2. 切换仓库地址格式（SSH↔HTTPS）重试
   3. 检查Node.js版本（建议v16+）`
  };
  return suggestions[errorType] || suggestions.default;
}

function extractRepoIdentifier(repo) {
  if (!repo) return '';
  const httpsMatch = repo.match(/https?:\/\/([^\/]+)/);
  const sshMatch = repo.match(/git@([^:]+)/);
  if (httpsMatch) return httpsMatch[1];
  if (sshMatch) return sshMatch[1];
  return repo;
}

function extractRepoName(repo) {
  if (!repo) return '';
  const githubMatch = repo.match(/github\.com[/:]([^/]+\/[^/]+?)(?:\.git)?$/);
  if (githubMatch) return githubMatch[1];
  return '';
}

function cleanErrorText(text) {
  if (!text) return text;
  let cleaned = text.replace(/\x1B\[\d+m/g, '');
  cleaned = cleaned.trim();
  cleaned = cleaned.replace(/\n\s+/g, ' | ');
  cleaned = cleaned.replace(/C:\\Users\\[^\\]+\\Desktop\\[^:]+/g, '本地路径');
  return cleaned;
}

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

function getShortError(error) {
  if (!error) return '';
  
  const lines = error.split('\n');
  if (lines.length > 0) {
    const firstLine = lines[0].trim();
    if (firstLine.includes('Error:') || firstLine.includes('fatal:') || firstLine.includes('Spawn failed')) {
      return truncateText(firstLine, 100);
    }
  }
  
  return truncateText(error, 100);
}

function updateCurrentDeployIndex(log) {
  if (log.includes('Deploying: git')) {
    if (configExecutionOrder.length === 0) {
      currentDeployIndex = 1;
    } else {
      const executedIndices = configExecutionOrder.map(item => item.index);
      const nextConfig = deployResults.find(c => 
        c.isGit && c.isValid && !executedIndices.includes(c.index)
      );
      if (nextConfig) {
        currentDeployIndex = nextConfig.index;
      }
    }
    
    if (currentDeployIndex !== null) {
      const config = deployResults[currentDeployIndex - 1];
      if (config && !config.executed) {
        configExecutionOrder.push({
          index: currentDeployIndex,
          time: new Date(),
          repo: config.repo
        });
        config.executed = true;
        console.log(`\n🚀 开始部署第 ${currentDeployIndex} 个配置：${config.repoIdentifier}`);
      }
    }
  }
  
  deployResults.forEach(config => {
    if (config.isGit && config.isValid) {
      if (config.repoIdentifier && log.includes(config.repoIdentifier)) {
        currentDeployIndex = config.index;
      }
      
      if (config.repoName && log.includes(config.repoName)) {
        currentDeployIndex = config.index;
      }
    }
  });
}

function findConfigSpecificError(config, errorKeywords) {
  if (config.repoIdentifier) {
    const repoErrors = errorLogs.filter(log => 
      log.includes(config.repoIdentifier) &&
      errorKeywords.some(keyword => log.toLowerCase().includes(keyword.toLowerCase()))
    );
    if (repoErrors.length > 0) return repoErrors[0];
  }
  
  if (config.repoName) {
    const nameErrors = errorLogs.filter(log => 
      log.includes(config.repoName) &&
      errorKeywords.some(keyword => log.toLowerCase().includes(keyword.toLowerCase()))
    );
    if (nameErrors.length > 0) return nameErrors[0];
  }
  
  const configExecution = configExecutionOrder.find(item => item.index === config.index);
  if (configExecution) {
    const laterErrors = errorLogs.filter((log, idx) => {
      return errorKeywords.some(keyword => log.toLowerCase().includes(keyword.toLowerCase()));
    });
    
    if (laterErrors.length > 0) {
      return laterErrors[0];
    }
  }
  
  const validConfigs = deployResults.filter(r => r.isGit && r.isValid);
  if (validConfigs.length > 0 && config.index === validConfigs[validConfigs.length - 1].index) {
    const lastError = errorLogs.find(log => 
      errorKeywords.some(keyword => log.toLowerCase().includes(keyword.toLowerCase()))
    );
    if (lastError) return lastError;
  }
  
  return null;
}