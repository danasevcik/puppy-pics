import React from "react";

function BreedCard(props) {
  return (
    <div>
      <p onClick={() => props.handleClick(props.breed)}>
        {props.breed[0].toUpperCase() + props.breed.slice(1)}
      </p>
    </div>
  )
}

export default BreedCard;
