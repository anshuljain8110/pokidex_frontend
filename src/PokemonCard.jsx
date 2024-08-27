// PokemonCard.jsx
import React from 'react';
import './App.css'; // Import the CSS file

function PokemonCard({ onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
     <img src="https://ntvb.tmsimg.com/assets/assets/57282_v9_bc.jpg?w=360&h=480" alt="Placeholder" />
      <h3>Placeholder Name</h3>
    </div>
  );
}

export default PokemonCard;
