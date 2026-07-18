document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.createElement('div');
  cursor.className = 'gif-cursor normal';
  document.body.appendChild(cursor);

  let isEdgeMenuVisible = false;
  let isInputFocused = false;
  const clickableSelectors = 'a, button, .btn, [role="button"], i.icon, .iconfont, input[type="button"], input[type="submit"]';
  const textSelectors = 'p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, input, textarea, [contenteditable]';

  let lastX = 0;
  let lastY = 0;

  function updateCursor(x, y) {
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }

  document.addEventListener('pointermove', function(e) {
    if (e.clientX === lastX && e.clientY === lastY) return;
    lastX = e.clientX;
    lastY = e.clientY;
    updateCursor(lastX, lastY);
  }, {
    passive: true,
    capture: true,
    once: false
  });

  function checkEdgeMenu() {
    const edgeMenu = document.querySelector('[aria-label*="选择"]') || 
                     document.querySelector('.ms-ContextualMenu') ||
                     document.querySelector('[role="menu"][style*="fixed"]');
    isEdgeMenuVisible = !!edgeMenu;
    
    if (isEdgeMenuVisible) {
      cursor.classList.add('hidden');
      document.body.style.cursor = 'auto';
    } else {
      cursor.classList.remove('hidden');
      document.body.style.cursor = 'none';
    }
  }

  document.addEventListener('selectionchange', function() {
    const hasSelection = window.getSelection().toString().length > 0;
    checkEdgeMenu();

    if (hasSelection) {
      cursor.classList.remove('normal', 'clickable');
      cursor.classList.add('text');
    } else {
      restoreCursorStyle();
    }
  });

  function restoreCursorStyle() {
    if (isEdgeMenuVisible) return;

    const target = document.elementFromPoint(lastX, lastY);
    if (!target) return;

    cursor.classList.remove('normal', 'clickable', 'text');

    if (target.closest(clickableSelectors)) {
      cursor.classList.add('clickable');
    } else if (target.closest(textSelectors) || isInputFocused) {
      cursor.classList.add('text');
    } else {
      cursor.classList.add('normal');
    }
  }

  document.addEventListener('pointerover', function(e) {
    lastX = e.clientX;
    lastY = e.clientY;
    restoreCursorStyle();
  }, { passive: true, capture: true });

  document.addEventListener('focusin', function(e) {
    if (e.target.closest('input, textarea, [contenteditable]')) {
      isInputFocused = true;
      cursor.classList.remove('normal', 'clickable');
      cursor.classList.add('text');
    }
  }, { passive: true, capture: true });

  document.addEventListener('focusout', function(e) {
    if (e.target.closest('input, textarea, [contenteditable]')) {
      isInputFocused = false;
      restoreCursorStyle();
    }
  }, { passive: true, capture: true });

  document.addEventListener('pointerup', function() {
    setTimeout(checkEdgeMenu, 50);
    restoreCursorStyle();
  }, { passive: true, capture: true });

  document.addEventListener('pointerleave', function() {
    cursor.style.opacity = 0;
  }, { passive: true });

  document.addEventListener('pointerenter', function() {
    cursor.style.opacity = 1;
  }, { passive: true });

  restoreCursorStyle();
  document.body.style.cursor = 'none';
});