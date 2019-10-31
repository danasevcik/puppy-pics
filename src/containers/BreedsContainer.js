import React, { Component } from "react";
import BreedCard from '../components/BreedCard'

class BreedsContainer extends Component {

  state = {
    breeds: null
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => {
      this.getBreeds(breeds.message)
    })
  }

  getBreeds(breeds) {
    let breedsArray = Object.keys(breeds)
    this.setState({breeds: breedsArray})
  }

  printCards() {
    let keyNum = 0
    return this.state.breeds.map(breed => {
      keyNum++;
      return <BreedCard breed={breed} key={keyNum} handleClick={this.props.handleClick}/>
    })
  }

  render() {
    return (
      <div>
      <h1>Please choose a breed!</h1>
      {this.state.breeds && this.printCards()}
      </div>
    )

  }

}

export default BreedsContainer;
