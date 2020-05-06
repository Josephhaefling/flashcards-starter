const chai = require('chai')
const expect = chai.expect
const data = require('../src/data')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

beforeEach(() => {
  prototypeQuestions = data.prototypeData
})

describe('Game', () => {
  it('should be true', () => {
    expect(true).to.equal(true)
  });
  it('should keep track of the current round', () => {
    game = new Game()

    game.start()
    expect(game.roundCount).to.equal(1)
  });
  it('should create all game cards', () => {
    game.start()
    expect(game.currentRound.deck[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    })
  });
  it('should create a new deck', () => {
    let deck = new Deck(prototypeQuestions)

    game.start()
    expect(game.currentRound.deck).to.deep.equal(prototypeQuestions)
  });
  it('should create a new deck', () => {
    let deck = new Deck(prototypeQuestions)
    let round = new Round(deck)

    game.start()
    expect(game.currentRound.deck).to.deep.equal(round.deck)
  });
})
