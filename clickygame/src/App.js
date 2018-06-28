import React, { Component } from 'react';
import PlayingCard from "./components/PlayingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import playingcards from "./playingcards.json";
import './App.css';
let shuffleArr = require("shuffle-array");

class App extends Component {

  state = {
    playingcards,
    score: 0,
    highScore: 0
  };

  clicked = (id) => {
    let playingcards = this.state.playingcards;
    let score = this.state.score;
    let targetCard = {};
    playingcards.forEach((card)=>{
      if(card.id === id){
        targetCard = card;
      }  
    })
    if(targetCard.clicked === false){
      targetCard.clicked = true;
      score++;
      shuffleArr(playingcards);
      this.setState({score, playingcards});
    }else{
      this.gameOver();
    }
  }

  gameOver = () => {
    let highScore = this.state.highScore;
    let score = this.state.score;
    let playingcards = this.state.playingcards;
    
    if(score>highScore){
      highScore = score;
    }
    score = 0;
    playingcards.forEach((card)=>{
      card.clicked = false;
    });
    shuffleArr(playingcards);
    this.setState({playingcards, score, highScore});
  }

  removeCard = id => {
    const playingcards = this.state.playingcards.filter(playingcard => playingcard.id !== id);
    this.setState({playingcards});
  }

  render() {
    let highScore = this.state.highScore;
    let score = this.state.score;
    return (
      <Wrapper>
        <Title>Playing Card Memorization Training Game </Title>
       
        <h2>Score:</h2>
        {score}
       
        <h2>High Score:</h2>
        {highScore}
        <Wrapper>
        {this.state.playingcards.map(playingcard =>(
          <PlayingCard
            removeCard={this.removeCard}
            id={playingcard.id}
            key={playingcard.id}
            name={playingcard.name}
            image={playingcard.image}
            value={playingcard.value}
            clicked={this.clicked}
            />
        ))}
        </Wrapper>
        </Wrapper>
    );
  }
}

export default App; 

  
