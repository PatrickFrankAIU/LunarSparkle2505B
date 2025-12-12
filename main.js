const sale = document.getElementById('overlay')
const close = document.getElementById('close-overlay')
const bodyElement = document.body;
const today = new Date();
const copyYear = today.getFullYear()
const footerText = document.getElementById('footer-year')
footerText.innerHTML = copyYear

const lightDarkButton = document.getElementById('toggle-btn');
let isLight = 'light'

lightDarkButton.addEventListener('click', function setMode() {
    let lightMode = sessionStorage.getItem('isLight')
    if (lightMode === 'light') {
        setDarkMode();
    } else {
        setLightMode();
    }
})


// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(showUp, 5000);
// })

const main = () => {
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(showUp, 3000);
    }

}

function showUp() {
    sale.style.display = 'block'
    sessionStorage.setItem('popupShown', 'true')
}

// close popup with X
bodyElement.addEventListener('click', function closeButton() {
    try {
        sale.style.display = 'none'
    } catch (error) {
        console.log(error);
        
    }
})

// sale.addEventListener('click', (e) => {
//     if (e.target === sale) {
//         sale.style.display = 'none'
//     }
// })

function setDarkMode() {
    // switching to dark mode
    document.body.classList.toggle('dark-mode');  
    document.documentElement.style.setProperty('--bg-darker', 'hsl(187 25% 36%)');
    document.documentElement.style.setProperty('--bg-dark', 'hsl(228 79% 2%)');
    document.documentElement.style.setProperty('--bg', 'hsl(222 55% 5%)');
    document.documentElement.style.setProperty('--bg-light', 'hsl(220 35% 10%');
    document.documentElement.style.setProperty('--text', 'hsl(220 100% 98%)');
    document.documentElement.style.setProperty('--text-muted', 'hsl(220 35% 73%)');
    document.documentElement.style.setProperty('--highlight', 'hsl(220 20% 42%)');
    document.documentElement.style.setProperty('--border', 'hsl(220 26% 31%)');
    document.documentElement.style.setProperty('--border-muted', 'hsl(220 37% 20%)');
    document.documentElement.style.setProperty('--primary', 'hsl(220 78% 76%)');
    document.documentElement.style.setProperty('--secondary', 'hsl(40 53% 60%)');
    document.documentElement.style.setProperty('--danger', 'hsl(9 26% 64%)');
    document.documentElement.style.setProperty('--warning', 'hsl(52 19% 57%)');
    document.documentElement.style.setProperty('--success', 'hsl(146 17% 59%)');
    document.documentElement.style.setProperty('--info', 'hsl(217 28% 65%)');

    lightDarkButton.innerText = 'Set Light Mode'
    isLight = 'dark'

    sessionStorage.setItem('isLight', 'dark')
    // isLight = sessionStorage.getItem('isLight')
    // isLight = false;   
}

function setLightMode() {
    // switching to light mode
    // document.body.className.replace('.dark-mode', '')
    document.body.classList.toggle('dark-mode');  
    document.documentElement.style.setProperty('--bg-darker', 'hsl(187 25% 86%)');
    document.documentElement.style.setProperty('--bg-dark', 'hsl(220 59% 91%)');
    document.documentElement.style.setProperty('--bg', 'hsl(220 100% 97%)');
    document.documentElement.style.setProperty('--bg-light', 'hsl(220 100% 100%)');
    document.documentElement.style.setProperty('--text', 'hsl(226 85% 7%)');
    document.documentElement.style.setProperty('--text-muted', 'hsl(220 26% 31%)');
    document.documentElement.style.setProperty('--highlight', 'hsl(220 100% 100%)');
    document.documentElement.style.setProperty('--border', 'hsl(220 19% 53%)');
    document.documentElement.style.setProperty('--border-muted', 'hsl(220 27% 65%)');
    document.documentElement.style.setProperty('--primary', 'hsl(221 49% 33%)');
    document.documentElement.style.setProperty('--secondary', 'hsl(44 100% 14%)');
    document.documentElement.style.setProperty('--danger', 'hsl(9 21% 41%)');
    document.documentElement.style.setProperty('--warning', 'hsl(52 23% 34%)');
    document.documentElement.style.setProperty('--success', 'hsl(147 19% 36%)');
    document.documentElement.style.setProperty('--info', 'hsl(217 22% 41%)');

    lightDarkButton.innerText = 'Set Dark Mode'
    isLight = 'light'

    sessionStorage.setItem('isLight', 'light')
    // isLight = sessionStorage.getItem('isLight')

    // isLight = true;
}



    // Light Mode:
//     --bg-darker: hsl(187 25% 86%); 
//     --bg-dark: hsl(185 26% 88%);
//     --bg: hsl(185 46% 94%);
//     --bg-light: hsl(185 100% 99%);
//     --text: hsl(187 100% 3%);
//     --text-muted: hsl(185 20% 26%);
//     --highlight: hsl(185 100% 97%);
//     --border: hsl(185 12% 48%);
//     --border-muted: hsl(185 14% 60%);
//     --primary: hsl(184 100% 10%);
//     --secondary: hsl(0 44% 32%);
//     --danger: hsl(9 21% 41%);
//     --warning: hsl(52 23% 34%);
//     --success: hsl(147 19% 36%);
//     --info: hsl(217 22% 41%);