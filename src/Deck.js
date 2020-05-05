class Deck {
  constructor(cards) {
    this.cards = cards
  }
  getNumberOfCards = () => {
    return this.cards.length
  }
}

module.exports = Deck
