class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
    this.userIsCorrect = false;
  }
  returnGuess = () => {
    return this.userGuess
  }
  returnCard = () => {
    return this.card
  }
  evaluateGuess = () => {
    if (this.userGuess === this.card.correctAnswer) {
      this.userIsCorrect = true;
    }
      return this.userIsCorrect
  }
  giveFeedback = () => {
    return this.userIsCorrect ?  'correct' : 'incorrect'
  }
}

module.exports = Turn;
