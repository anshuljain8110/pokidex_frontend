// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
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
  const [page, setPage] = useState(1);
  const [placeholderCards, setPlaceholderCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`http://localhost:8080/v1/pokedex/pokemons?page=${page}`);
        let data = await response.json(); // Parse the response as JSON
        setPlaceholderCards([...placeholderCards,...data.data]); // Update state with fetched data
        // console.log(data, placeholderCards);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchData();
  }, [page]); // Added 'page' as a dependency to refetch data when page changes

  const handleCardClick = (index) => {
    navigate(`/pokemon/${index + 1}`);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokémon"
        />
      </div>
      {placeholderCards.length > 0 && (
        <div className="app-container">
          {placeholderCards.map((pokemon, index) => (
            <PokemonCard data={pokemon} key={index} onClick={() => handleCardClick(index)} />
          ))}
        </div>
      )}
      <button onClick={()=>setPage(page+1)}>Load more</button>
    </div>
  );
}

export default App;
