import React, { Component } from 'react';
import {CardName, Suit} from 'typedeck';
import {PokerGame} from './pineapple';
import { Card } from "./Card";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  printHand(hand){
  }
  render() {
    let results = new PokerGame().start();
    console.log(CardName[3]);
    console.log(results);
    const winnerName = results.winner.name;
    const winnerHand = results.winner.getHand();
    console.log(winnerHand);
    let pretty = winnerHand.getCards().map(card => {
      return (
        <Card name={CardName[card.cardName]} suit={Suit[card.suit]}></Card>
      )
    });
    return (
      <div>
      The winner is {winnerName}
      the winner hand i s<br></br>
      {pretty}
    </div> 
    );
  }
}

export default App;
