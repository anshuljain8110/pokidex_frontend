// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
  const placeholderCards = Array.from({ length: 20 });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/pokemon/${index + 1}`);
  };

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
          <PokemonCard key={index} id={index + 1} onClick={() => handleCardClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
