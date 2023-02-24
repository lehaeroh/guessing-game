class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.currentGuess = null;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      this.currentGuess = Math.ceil((this.min + this.max) / 2);
      return this.currentGuess;
    }
  
    lower() {
      this.max = this.currentGuess;
    }
  
    greater() {
      this.min = this.currentGuess;
    }
  }

//   const game = new GuessingGame();
// game.setRange(0, 4048)
// console.log(game.guess())
// game.lower();
// console.log(game.guess())
// game.lower();
// console.log(game.guess())
// game.lower();
// console.log(game.guess())
// game.greater();
// console.log(game.guess())
// game.greater();
// console.log(game.guess())
// game.lower();
// console.log(game.guess())
// game.lower();
// console.log(game.guess())
// game.greater();
// console.log(game.guess())
// game.greater();
// console.log(game.guess())
// game.greater();
// console.log(game.guess())
// game.lower();

// console.log(game.guess())

module.exports = GuessingGame;

