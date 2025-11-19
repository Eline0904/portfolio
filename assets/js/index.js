function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function verwijderCookieFunctie() {
    const cookieBanner = document.querySelector('.Cookies');
    if (cookieBanner) {
        cookieBanner.style.display = 'none';
        setCookie('cookiesAccepted', 'true', 365);
        console.log('Cookies accepted and banner hidden.');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    if (getCookie('cookiesAccepted') === 'true') {
        const cookieBanner = document.querySelector('.Cookies');
        if (cookieBanner) cookieBanner.style.display = 'none';
        console.log('Cookies already accepted; banner hidden.');
    }
    const acceptBtn = document.getElementById('Accept');
    const buttons = document.querySelectorAll('.Cookies button');
    buttons.forEach(btn => {
        btn.addEventListener('click', verwijderCookieFunctie);
    });
});