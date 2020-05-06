const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


describe('Card', () => {
it('should be a function', () => {
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)
  expect(Round).to.be.a('function');
});
it('should return the current card being played', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('what?', card2)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  expect(round.returnCurrentCard()).to.deep.equal(card1)
});
it('should be able to take turns', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('what?', card2)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)
  round.takeTurn('no')
  expect(round.turns).to.equal(1)
});
it('should update the current card after a turn is taken', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('black', card3)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  round.takeTurn('no')
  expect(round.currentCard).to.equal(card2)
});
it('should be able to evaluate and store incorrect guesses', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('black', card3)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  round.takeTurn('yes')
  round.takeTurn('huh?')
  expect(round.incorrectAnswers).to.deep.equal([card1.id, card2.id])
});
it('should be able to return if the guess is correct', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('no', card1)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  turn.evaluateGuess()
  expect(round.takeTurn('no')).to.equal('correct')
});
it('should be able to return if the guess is incorrect', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('black', card3)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  expect(round.takeTurn('green')).to.equal('incorrect')
});
it('should be able to calculate the percentage of correct guesses', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('no', card1)
  turn = new Turn('what?', card2)
  turn = new Turn('black', card3)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  round.takeTurn('no')
  round.takeTurn('what?')
  round.takeTurn('black')
  expect(round.calculatePercentCorrect()).to.equal(33)
});
it('should print round over you answered <>% of the questions correctly', () => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'what?')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  turn = new Turn('no', card1)
  turn = new Turn('what?', card2)
  turn = new Turn('black', card3)
  deck = new Deck([card1, card2, card3])
  round = new Round(deck)

  round.takeTurn('no')
  round.takeTurn('what?')
  round.takeTurn('black')
  expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
})
})
