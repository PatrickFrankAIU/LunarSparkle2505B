const sale = document.getElementById('overlay')
const close = document.getElementById('close-overlay')
const today = new Date();
const copyYear = today.getFullYear()
const footerText = document.getElementById('footer-year')
footerText.innerHTML = copyYear

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(showUp, 5000);
// })

const main = () => {
    setTimeout(showUp, 5000);
}

function showUp() {
    sale.style.display = 'block'
}

close.addEventListener('click', function closeButton() {
    sale.style.display = 'none'
})