import { TexasHoldEmPokerGameType, Player, PokerScoreService} from "typedeck";

export class PokerGame {
  constructor() {
    this.deck = new TexasHoldEmPokerGameType().createDeck();
    this.scorer = new PokerScoreService();
    this.deck.shuffle(); // for good measure
  }
  getWinningHand(hands){
    let values = hands.map(hand => this.scorer.scoreHand(hand).value);
    return values.indexOf(Math.max(...values));
  }
  start(){
    let players = [new Player('Tom'), new Player('Rob')];
    players.forEach((player) => this.deck.deal(player.getHand(), 5));
    let hands = players.map(player => player.getHand());
    let winner = this.getWinningHand(hands);
    return {
      winner: players[winner],
      players
    }
  }
  printResults(players, winningPlayer){
    const winner = players[winningPlayer];
    for(let player of players) {
      console.log(player.getHand());
    }
    console.log(`The Winning Player is : ${winner.name} with the hand: `)
    console.log(winner.getHand());
  }
}

// create a new Deck with allowable cards from the TexasHold'Em game type

// create 3 new players: Bob, Alice, Steve
// deal 7 cards to each player



// if (result > result2) {
//   console.log("Toms hand: ")
//   var i;
//   for (i = 0; i < 5; i++) { 
//     console.log(players[0].getHand().cards[i]);
//   }
//   console.log("Robs hand: ")
//   var j;
//   for (j = 0;j < 5; j++) { 
//     console.log(players[1].getHand().cards[j]);
//   }
//   console.log("The Winner is " + players[0]);
// } else {
  
//   console.log("Toms hand: ")
//   var i;
//   for (i = 0; i < 5; i++) { 
//     console.log(players[0].getHand().cards[i]);
//   }
//   console.log("Robs hand: ")
//   var j;
//   for (j = 0;j < 5; j++) { 
//     console.log(players[1].getHand().cards[j]);
//   }
//   console.log("The Winner is " + players[1]);
// }

