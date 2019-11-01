import React, { Component } from "react";
import BreedCard from '../components/BreedCard'
import BreedSearch from '../components/BreedSearch'

class BreedsContainer extends Component {

  // state to hold all breeds
  state = {
    breeds: null
  }

  // fetch to get all breeds
  // call format breeds to format the json response
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(breeds => {
      this.formatBreeds(breeds.message)
    })
  }

  // get keys from the breeds object
  // set state with list of breeds
  formatBreeds(breeds) {
    let breedsArray = Object.keys(breeds)
    this.setState({breeds: breedsArray})
  }

  // map through breeds in state and print card for each breed
  // pass the breed, key and click handler
  printCards() {
    let keyNum = 0
    return this.state.breeds.map(breed => {
      keyNum++;
      return <BreedCard breed={breed} key={keyNum} handleClick={this.props.handleClick}/>
    })
  }

  // rendered from App
  // if the fetch has already completed and breeds is truthy in state
  // call print cards
  render() {
    return (
      <div>
        <h1>Please choose a breed!</h1>
        <BreedSearch />
        {this.state.breeds && this.printCards()}
      </div>
    )

  }

}

export default BreedsContainer;
