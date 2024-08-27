// App.jsx
import React from 'react';
import PokemonCard from './PokemonCard';
import './App.css'; // Import the CSS file

function App() {
  const placeholderCards = Array.from({ length: 20 });

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokémon"
        />
      </div>
      <div className="app-container">
        {placeholderCards.map((_, index) => (
          <PokemonCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
