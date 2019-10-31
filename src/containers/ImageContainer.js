import React, { Component } from "react";

class ImageContainer extends Component {

  state = {
    breed: this.props.chosenBreed,
    photoUrl: null
  }

  getPhoto = () => {
    fetch(`https://dog.ceo/api/breed/${this.props.chosenBreed}/images/random`)
    .then(resp => resp.json())
    .then(image => {
      this.setState({
        photoUrl: image.message,
        breed: this.props.chosenBreed
      })
    })
  }

  render() {
    if (this.props.chosenBreed && (this.props.chosenBreed !== this.state.breed)) {
      this.getPhoto()
    }
    return (
      <div>
        {this.state.photoUrl &&
          <img src={this.state.photoUrl} alt='puppy based on clicked breed' id='puppy-img'/>
        }
        <h1>{this.props.chosenBreed}</h1>
      </div>
    )
  }
}

export default ImageContainer;
