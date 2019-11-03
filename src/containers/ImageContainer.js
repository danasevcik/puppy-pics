import React, { Component } from "react";

class ImageContainer extends Component {

  // state to hold currently shown breed and current photourl
  state = {
    currentBreed: null,
    currentPhotoUrl: null
  }

  // fetch to get one randomized photo based on clicked breed
  // update local state to reflect current breed and url
  // scroll pagee to the top
  getPhoto = () => {
    fetch(`https://dog.ceo/api/breed/${this.props.chosenBreed}/images/random`)
    .then(resp => resp.json())
    .then(image => {
      this.setState({
        currentPhotoUrl: image.message,
        currentBreed: this.props.chosenBreed
      })
    })
    window.scroll({
     top: 0,
     left: 0,
     behavior: 'smooth'
    });
  }

  // rendered from app
  // if chosen breed exists in props and the new chosen is updated from the current breed shown
  // call get photo
  render() {
    if (this.props.chosenBreed && (this.props.chosenBreed !== this.state.currentBreed)) {
      // show loading image until new breed img is rendered
      let img = document.querySelector('#puppy-img');
      if (img) {
        img.src = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
      }
      this.getPhoto()
    }
    return (
      <div>
        {this.state.currentPhotoUrl &&
          <h2>{this.state.currentBreed[0].toUpperCase() + this.state.currentBreed.slice(1)}</h2>
        }
        {this.state.currentPhotoUrl &&
          <img src={this.state.currentPhotoUrl} alt='puppy based on clicked breed' id='puppy-img'/>
        }
      </div>
    )
  }
}

export default ImageContainer;
