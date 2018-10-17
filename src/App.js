import React, { Component } from 'react';
import cards from "./cards.json"
import FriendCard from "./components/FriendCard";
import ScoreDiv from "./components/ScoreDiv";
import TextDiv from "./components/TextDiv";
import "./App.css";

class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    guess: "null"
  }

  shuffle = array => {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }

  updateStats = (clicks, id) => {
    if (clicks === 0) {
      this.continueGame(id)
    } else {
      this.newGame();
    }
  }

  continueGame = id => {
    const updateCard = this.state.cards.filter(card => card.id === id);
    updateCard[0].clickCounter += 1;

    const cards = this.state.cards.filter(card => card.id !== id).concat(updateCard);
    const score = this.state.score + 1;

    let topScore = this.state.topScore;

    if (topScore < score) {
      topScore += 1;
    } else {
      topScore = this.state.topScore;
    }

    this.setState({
      cards: cards,
      score: score,
      topScore: topScore,
      guess: "YOU GUESSED CORRECTLY!"
    })
  }

  newGame = () => {
    const cards = this.state.cards.map(obj => {
      var rObj = {};
      rObj.id = obj.id;
      rObj.image = obj.image;
      rObj.clickCounter = 0;
      return rObj;
    });
    const score = 0;
    this.setState({
      cards: cards,
      score: score,
      topScore: this.state.topScore,
      guess: "YOU GUESSED INCORRECTLY!"
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar-dark bg-dark">
          <div className="container">
            <nav className="nav nav-pills nav-fill navbar-dark bg-dark">
              <span className="nav-item text-white text-left">
                <h3 className="brand">CLICKY GAME</h3>
              </span>
              <span className="nav-item text-white text-center">
                <h3 className="stats"><TextDiv info={this.state} /></h3>
              </span>
              <span className="nav-item text-white text-right">
                <h3 className="stats"><ScoreDiv info={this.state} /></h3>
              </span>
            </nav>
          </div>
        </nav>
        <section className="flex-column text-center header">
          <div className="box">
          <h1 className="banner1">Clicky Game!</h1>
          <h2 className="banner2">Click on an image to earn points, but dont click on any image more than once!</h2>
          </div>
        </section>
        <section className="container">
          <div className="container-cards">
            {this.shuffle(this.state.cards).map(card => (
              <FriendCard
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
                clickCounter={card.clickCounter}
                updateStats={this.updateStats}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
