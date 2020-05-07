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
      return newTurn.giveFeedback()
  }

  calculatePercentCorrect = () => {
    return Math.floor(this.incorrectAnswers.length / this.turns * 100)
  }

  endRound = (time) => {
    let endOfRound = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! It took you ${time} to complete this round.`
    console.log(endOfRound);
    return endOfRound
  }

  getTime = (startTime, endTime) => {
    let difference = endTime - startTime
    let min = Math.floor(difference / 60000)
    let sec = ((difference % 60000) / 1000).toFixed(0)
    return `${min}:${(sec < 10 ? "0" : "")}${sec}`
  }
}

module.exports = Round
