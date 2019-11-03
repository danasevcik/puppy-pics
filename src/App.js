import React, { Component } from 'react';
import BreedsContainer from './containers/BreedsContainer'
import ImageContainer from './containers/ImageContainer'
import './App.css';

class App extends Component {

  // state to hold the chosen breed
  // updated on click of a breed card
  state = {
    chosenBreed: null
  }

  // function to handle breed card click
  handleClick = (breed) => {
    this.setState({chosenBreed: breed})
  }

  // render the breeds container and image container
  // pass down click handler to breeds container
  // pass down chosen breed to image container
  render() {
    return (
      <div className='App'>
        <h1>Welcome To Puppy Pics <span><img id='paw-pic' src='https://cdn2.iconfinder.com/data/icons/miscellanea-set-4/100/_-4-512.png' alt='paw print'/></span></h1>
        <div id='flex'>
          <div className='flex-container'>
            <BreedsContainer handleClick={this.handleClick}/>
          </div>
          <div className='flex-container'>
            <ImageContainer chosenBreed={this.state.chosenBreed}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
