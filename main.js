const sale = document.getElementById('overlay')
const close = document.getElementById('close-overlay')
const bodyElement = document.body;
const today = new Date();
const copyYear = today.getFullYear()
const footerText = document.getElementById('footer-year')
footerText.innerHTML = copyYear

const lightDarkButton = document.getElementById('toggle-btn');

lightDarkButton.addEventListener('click', function changeBtn() {
    document.documentElement.style.setProperty('--bg-darker', 'hsl(187 25% 36%)');
    document.documentElement.style.setProperty('--bg-dark', 'hsl(185 26% 38%)');
    document.documentElement.style.setProperty('--bg', 'hsl(185 46% 44%)');
    document.documentElement.style.setProperty('--bg-light', 'hsl(185 100% 49%)');
    document.documentElement.style.setProperty('--text', 'hsl(187 100% 53%)');
    document.documentElement.style.setProperty('--text-muted', 'hsl(185 20% 76%)');
    document.documentElement.style.setProperty('--highlight', 'hsl(185 100% 47%)');
    document.documentElement.style.setProperty('--border', 'hsl(185 12% 98%)');
    document.documentElement.style.setProperty('--border-muted', 'hsl(185 14% 10%)');
    document.documentElement.style.setProperty('--primary', 'hsl(184 100% 60%)');
    document.documentElement.style.setProperty('--secondary', 'hsl(0 44% 82%)');
    document.documentElement.style.setProperty('--danger', 'hsl(9 21% 91%)');
    document.documentElement.style.setProperty('--warning', 'hsl(52 23% 84%)');
    document.documentElement.style.setProperty('--success', 'hsl(147 19% 86%)');
    document.documentElement.style.setProperty('--info', 'hsl(217 22% 91%)');
})

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
    sale.style.display = 'none'
})

sale.addEventListener('click', (e) => {
    if (e.target === sale) {
        sale.style.display = 'none'
    }
})