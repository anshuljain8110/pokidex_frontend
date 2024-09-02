// PokemonCard.jsx
import React from 'react';
import './App.css';

function PokemonCard({ id, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src="https://ntvb.tmsimg.com/assets/assets/57282_v9_bc.jpg?w=360&h=480" alt={`Pokemon ${id}`} />
      <h3>#{id}</h3>
    </div>
  );
}

export default PokemonCard;
