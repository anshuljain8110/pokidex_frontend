// PokemonCard.jsx
import React from 'react';
import './App.css';

function PokemonCard({data, id, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      {console.log(data)}
      <img src={data.image.hires} alt={`Pokemon ${id}`} />
      <h3>#{data.id} {data.name.english}</h3>
    </div>
  );
}

export default PokemonCard;
