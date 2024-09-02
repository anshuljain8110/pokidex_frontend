// PokemonDetails.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";

function PokemonDetails() {
  const { id } = useParams();
  const [page,setPage] = useState(+id)
  const [pokemon, setpokemon] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `http://localhost:8080/v1/pokedex/pokemons/${id}`
        );
        let data = await response.json();
        setpokemon(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchData();
  }, [id]);

  // Placeholder content until API is integrated
  return (
    <div className="pokemon-details" style={{width:"900px",display:"flex",flexDirection:"row"}}>
      
      <Link to={'http://localhost:3000/'}>Home</Link>
      <Link to={`http://localhost:3000/pokemon/${+id-1}`}>prev</Link>
      {pokemon.description!==undefined ? (
        <div className="maan">
          <div className="left">
            <h1>{pokemon.name.english}</h1>
            <img src={pokemon.image.hires} alt="" />
          </div>
          <div className="right">
            <h2>About</h2>
            <h4>Description</h4>
            <p>{pokemon.description}</p>
            <div>
              <p>Pokedex Id: {pokemon.id}</p>
              <p>Type: {pokemon.type.join(", ")}</p>
              <p>Egg: {pokemon.profile.egg.join(", ")}</p>
              <p>Species:  {pokemon.species}</p>
              {pokemon.profile.gender!=="Genderless"?<p>Gender:  {pokemon.profile.gender.split(":")[0]}% Male {pokemon.profile.gender.split(":")[1]}% Female</p>:"Gender: Genderless"}

              <p>Height:      {pokemon.profile.height}</p>
              <p>Weight : {pokemon.profile.weight}</p>
              
              <p>Ability: {(pokemon.profile.ability.map((e)=> {return e[0]})).join(", ")}</p>
              
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link to={`http://localhost:3000/pokemon/${+id+1}`}>next</Link>
    </div>
  );
}

export default PokemonDetails;

// total 898 pokemon