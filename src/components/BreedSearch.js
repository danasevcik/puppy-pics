import React, { Component } from "react";

class BreedSearch extends Component {

  // local state to hold search term
  state = {
    searchTerm: ''
  }

  // input field to search for breed and to see all breeds
  // on change (when user types), set state to new search term and then call handle change
  // from breed container
  // on click of see all breeds, call handle change with empty string and reset form
  render() {
    return (
      <div>
        <input type='name' value={this.state.searchTerm} placeholder='Search For a Breed'
        onChange={(e) => {
          this.setState({searchTerm: e.target.value}, () => {
            this.props.handleChange(this.state.searchTerm)
          })
        }}/>
        <input type='submit' value='See All Breeds'
        onClick={(e) => {
          this.props.handleChange('')
          this.setState({searchTerm: ''})
        }}
        />
      </div>
    )

  }
}

export default BreedSearch;
