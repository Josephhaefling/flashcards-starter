const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

beforeEach(() => {
  card1 = new Card(1, 'Can I?', ['yes', 'no', "don't talk to me"], 'no')
  card2 = new Card(2, 'Huh?', ['what?', 'huh?', 'did you say something?'], 'no')
  card3 = new Card(3, 'Whats your favorite color?', ['red', 'blue', 'green', 'black'], 'green')
  deck = new Deck([card1, card2, card3])
})

describe('Deck', () => {
  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  });
  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3)
  })
})
