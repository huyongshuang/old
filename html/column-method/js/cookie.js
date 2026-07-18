function setCookie(name, value, expires, path, domain, secure) {
    var cookieString = name + '=' + encodeURIComponent(value);
    if (expires) {
        var expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieString += '; expires=' + expirationDate.toUTCString();
    }
    if (path) {
        cookieString += '; path=' + path;
    }
    if (domain) {
        cookieString += '; domain=' + domain;
    }
    if (secure) {
        cookieString += '; secure';
    }
    document.cookie = cookieString;
}

function getCookie(name) {
    var cookieName = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length));
        }
    }
    return null;
}