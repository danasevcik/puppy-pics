import React from "react";

function BreedCard(props) {
  return (
    <div>
      <p onClick={() => props.handleClick(props.breed)}>{props.breed}</p>
    </div>
  )
}

export default BreedCard;
