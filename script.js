function flipCard() {
    var card = document.getElementById('myCard');
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    } else {
        card.classList.add('flipped');
    }
}
function flipCardBack() {
    var card = document.getElementById('myCard');
    card.classList.remove('flipped');
}
