import React, { useState } from "react";

function BreedSearch() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <input type='name' value={searchTerm} />
    </div>
  )
}

export default BreedSearch;
