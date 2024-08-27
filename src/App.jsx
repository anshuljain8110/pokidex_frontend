// App.jsx
import React from 'react';
import PokemonCard from './PokemonCard';
import './App.css'; // Import the CSS file

function App() {
  const placeholderCards = Array.from({ length: 20 });

  const handleCardClick = (index) => {
    alert(`Card ${index + 1} clicked!`);
    // Here you can add logic to navigate to a detail page or display more info
  };

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
          <PokemonCard key={index} onClick={() => handleCardClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
