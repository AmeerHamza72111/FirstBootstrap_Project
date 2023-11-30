let activeCard = null;

function toggleCard(card) {
    if (activeCard === card) {
        // Clicking the active card again, do nothing
        return;
    }

    if (activeCard !== null) {
        // Deactivate the currently active card
        activeCard.classList.remove('active');
    }

    card.classList.add('active');
    activeCard = card;
}

function toggleCards(clickedCard) {
    const cards = document.querySelectorAll('.cardnew');
    cards.forEach(card => {
        if (card === clickedCard) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}


