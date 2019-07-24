const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'diamonds', 'hearts', 'spades']

/*
<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>
*/

//* create a cards array
const card = [];


//* Loop through the suits
//*    Loop through the ranks
//*      Change the suit and rank inside the template literal
//*      push card to cards
for (const suit of suits) {
    for (const rank of ranks) {
        card.push(`<div class= "card">`)
        card.push(`<div class="card__inner">`)
        card.push(`<div class="card__front">`)
        card.push(`<div class= "number ${suit}"> ${rank} </div>`)
        card.push(`<div class="suit"><img src="images/${suit}.png"> </div>`)
        card.push(`<div class= "number ${suit}"> ${rank} </div>`)
        card.push(`</div>`)
        card.push(`<div class= "card__back"> </div>`)
        card.push(`</div>`)
        card.push(`</div>`)

    }
}

//* Retrieve deck from HTML
//* Insert cards to deck
const $deck = document.getElementById("deck")
$deck.innerHTML = card.join('')


//* Add an Event Listener to the deck
//*    Look for an element with class of 'card' using the closest() method
//*    If the element exists
//*      Toggle the class 'flipped'
$deck.addEventListener('click', function (monkey) {
    const run = monkey.target.closest('.card');
    if (run) {
    run.classList.toggle('flipped');
    }
})
