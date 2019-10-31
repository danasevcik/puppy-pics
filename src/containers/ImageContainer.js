import React, { Component } from "react";

class ImageContainer extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.chosenBreed}</h1>
      </div>
    )
  }
}

export default ImageContainer;
