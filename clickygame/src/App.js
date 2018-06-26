import React, { Component } from 'react';
import PlayingCard from "./components/PlayingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import playingcards from "./playingcards.json";
import './App.css';

class App extends Component {

  state = {
    playingcards
  };

  removeCard = id => {
    const playingcards = this.state.playingcards.filter(playingcard => playingcard.id !== id);
    this.setState({playingcards});
  }

  render() {
    return (
      <Wrapper>
        <Title>Playing Card Memorization Training Game </Title>
        {this.state.playingcards.map(playingcard =>(
          <PlayingCard
            removeCard={this.removeCard}
            id={playingcard.id}
            key={playingcard.id}
            name={playingcard.name}
            image={playingcard.image}
            value={playingcard.value}
            />
        ))}
        </Wrapper>
    );
  }
}

export default App; 

  
