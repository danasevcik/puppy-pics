import React from "react";

function BreedCard(props) {

  // rendered from breeds container
  // adds click listener to each card and passes that breed up to app
  return (
    <div>
      <p onClick={() => props.handleClick(props.breed)}>
        {props.breed[0].toUpperCase() + props.breed.slice(1)}
      </p>
    </div>
  )
}

export default BreedCard;
