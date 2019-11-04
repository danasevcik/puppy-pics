import React, { Component } from "react";
import BreedCard from '../components/BreedCard'
import BreedSearch from '../components/BreedSearch'

class BreedsContainer extends Component {

  // state to hold all breeds & search term
  state = {
    breeds: null,
    searchTerm: ''
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
  formatBreeds(jsonBreeds) {
    let breeds = Object.keys(jsonBreeds)
    this.setState({breeds})
  }

  // set state based on what the user types in breed search
  handleChange = (searchTerm) => {
    this.setState({searchTerm})
  }

  // filter breeds and return if the breed includes the search term
  // map through breeds in state and print card for each breed
  // pass the breed, key and click handler
  printCards() {
    let keyNum = 0
    let breeds = this.state.breeds.filter(breed => {
      return breed.includes(this.state.searchTerm)
    })
    return breeds.map(breed => {
      keyNum++;
      return <BreedCard breed={breed} key={keyNum} handleClick={this.props.handleClick}/>
    })
  }

  // rendered from App
  // render search input field
  // if the fetch has already completed and breeds is truthy in state
  // call print cards
  render() {
    return (
      <div id='breeds-container'>
        <h2>Please choose a breed:</h2>
        <BreedSearch handleChange={this.handleChange}/>
        {this.state.breeds && this.printCards()}
      </div>
    )

  }

}

export default BreedsContainer;
