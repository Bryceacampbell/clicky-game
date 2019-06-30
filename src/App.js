import React, { Component } from 'react';

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container"

class App extends Component {

  state = {
    score: 0,
  };

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Container />
      </div>
    )
  }
}

export default App;
