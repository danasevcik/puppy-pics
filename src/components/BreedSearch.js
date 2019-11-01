import React, { useState } from "react";

function BreedSearch(props) {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <input type='name' value={searchTerm} placeholder='Search For a Breed'
        onChange={(e) => {setSearchTerm(e.target.value)}
      }/>
      <input type='submit' value='submit'
        onClick={(e) => {props.handleChange(searchTerm)}}
      />
    </div>
  )
}

export default BreedSearch;
