let sale = document.getElementById('overlay')
let close = document.getElementById('close-overlay')



function main() {
    setTimeout(showUp, 5000);
}

function showUp() {
    sale.style.display = 'block'
}

close.addEventListener('click', function closeButton() {
    sale.style.display = 'none'
})

