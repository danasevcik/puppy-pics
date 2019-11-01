import React, { useState } from "react";

function BreedSearch(props) {

  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <input type='name' value={searchTerm} placeholder='Search For a Breed'
        onChange={(e) => {setSearchTerm(e.target.value)}
      }/>
      <input type='submit' value='Submit'
        onClick={(e) => {
          props.handleChange(searchTerm)
          setSearchTerm('')
        }}
      />
      <input type='submit' value='See All Breeds'
        onClick={(e) => {
          props.handleChange('')
          setSearchTerm('')
        }}
      />
    </div>
  )
}

export default BreedSearch;
