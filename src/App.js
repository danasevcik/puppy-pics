import React, { Component } from 'react';
import BreedsContainer from './containers/BreedsContainer'
import ImageContainer from './containers/ImageContainer'

import './App.css';

class App extends Component {

  state = {
    breeds: null,
    chosenBreed: null
  }


  handleClick = (breed) => {
    this.setState({chosenBreed: breed})
  }

  render() {
    return (
      <div className="App">
        <div id='breeds-container'>
          <BreedsContainer handleClick={this.handleClick}/>
        </div>
        <div id='img-container'>
          <ImageContainer chosenBreed={this.state.chosenBreed}/>
        </div>
      </div>
    );
  }
}

export default App;
