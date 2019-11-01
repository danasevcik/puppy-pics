import React, { Component } from "react";

class BreedSearch extends Component {

  state = {
    searchTerm: ''
  }

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
