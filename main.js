const sale = document.getElementById('overlay')
const close = document.getElementById('close-overlay')
const bodyElement = document.body;
const today = new Date();
const copyYear = today.getFullYear()
const footerText = document.getElementById('footer-year')
footerText.innerHTML = copyYear

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