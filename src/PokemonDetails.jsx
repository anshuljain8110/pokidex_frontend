// PokemonDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function PokemonDetails() {
  const { id } = useParams();

  // Placeholder content until API is integrated
  return (
    <div className="pokemon-details">
      <h1>Pokemon Details</h1>
      <p><strong>Pokemon ID:</strong> {id}</p>
      <p>Placeholder for additional information...</p>
      <img src="https://via.placeholder.com/300" alt={`Pokemon ${id}`} />
    </div>
  );
}

export default PokemonDetails;
