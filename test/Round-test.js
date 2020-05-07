const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

let card1
let card2
let card3
let turn
let deck
let round

beforeEach(() => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('what?', card2)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)
})


describe('Card', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });
  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  });
  it('should be able to take turns', () => {
    round.takeTurn('no')
    expect(round.turns).to.equal(1)
  });
  it('should update the current card after a turn is taken', () => {
    round.takeTurn('no')
    expect(round.currentCard).to.equal(card2)
  });
  it('should be able to evaluate and store incorrect guesses', () => {
    round.takeTurn('yes')
    round.takeTurn('huh?')
    expect(round.incorrectAnswers).to.deep.equal([card1.id, card2.id])
  });
  it('should be able to return if the guess is correct', () => {
    turn.evaluateGuess()
    expect(round.takeTurn('no')).to.equal('correct')
  });
  it('should be able to return if the guess is incorrect', () => {
    expect(round.takeTurn('green')).to.equal('incorrect')
  });
  it('should be able to calculate the percentage of correct guesses', () => {
    round.takeTurn('no')
    round.takeTurn('what?')
    round.takeTurn('black')
    expect(round.calculatePercentCorrect()).to.equal(33)
  });
  it('should print round over you answered <>% of the questions correctly', () => {
    round.takeTurn('no')
    round.takeTurn('what?')
    round.takeTurn('black')
    let time = round.getTime(1588815160424, 1588816260424)
    expect(round.endRound(time)).to.equal('** Round over! ** You answered 33% of the questions correctly! It took you 18:20 to complete this round.')
  });
  it('should get the time it took for the user to complete the round', () => {
    expect(round.getTime(1588815160424, 1588816260424)).to.equal('18:20')
  })
})
