const chai = require('chai')
const expect = chai.expect
const data = require('../src/data')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

let deck
let round
let prototypeQuestions
let game

beforeEach(() => {
  prototypeQuestions = data.prototypeData
  deck = new Deck(prototypeQuestions)
  round = new Round(deck)
  game = new Game()
})

describe('Game', () => {
  it('should be true', () => {
    expect(true).to.equal(true)
  });
  it('should keep track of the current round', () => {

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

    game.start()
    expect(game.currentRound.deck).to.deep.equal(prototypeQuestions)
  });
  it('should create a new deck', () => {

    game.start()
    expect(game.currentRound.deck).to.deep.equal(round.deck)
  });
})
