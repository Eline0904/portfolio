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
        if (this.id === 'Decline') {
            console.log('User declined cookies.');
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
        console.log('Dark mode is now ON.');
    } else {
        console.log('Dark mode is now OFF.');
    } 
}
function randomKleur() {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#ffffff'];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
console.log('Background color changed to: ' + document.body.style.backgroundColor);
}

function Greeting() {
    const myDate = new Date();
    const hours = myDate.getHours();
    console.log('Greeting() called — current Date:', myDate);
    let greet;
    if (hours >= 6 && hours < 12) {
        greet = "Goedemorgen!";
    }
    else if (hours >= 12 && hours < 18) {
        greet = "Goedemiddag!";
    }
    else if (hours >= 18 && hours < 24) {
        greet = "Goedenavond!";
    }
    else {
        greet = "Goedenacht!";
    }
}
