import React, { Component } from 'react';

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container"

class App extends Component {

  state = {
    score: 0,
    highscore: 0
  };

  increment = flag => {

    const newscore = this.state.score + 1;

    this.setState({
      score: flag ? 0 : newscore,
      highscore: newscore > this.state.highscore && !flag ? newscore : this.state.highscore
    })
  };


  render() {
    const { score, highscore } = this.state;
    return (
      <div>
        <NavBar score={score} highscore={highscore}/>
        <Header />
        <Container incrementFunc={this.increment}/>
      </div>
    )
  }
}

export default App;
