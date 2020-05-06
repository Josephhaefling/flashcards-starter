const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.incorrectAnswers = [];
  }

  updateCurrentCard = () => {
    this.currentCard = this.deck[this.turns]
  }

  returnCurrentCard = () => {
    return this.currentCard
  }

  takeTurn = (guess) => {
    this.turns ++
    let newTurn = new Turn(guess, this.currentCard)
    if (newTurn.evaluateGuess() === false) {
      this.incorrectAnswers.push(this.currentCard.id)
    }
      this.updateCurrentCard()
      return turn.giveFeedback()
  }

  calculatePercentCorrect = () => {
    return Math.floor(this.incorrectAnswers.length / this.turns * 100)
  }

  endRound = () => {
    let endOfRound = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(endOfRound);
    return endOfRound
  }
}

module.exports = Round
