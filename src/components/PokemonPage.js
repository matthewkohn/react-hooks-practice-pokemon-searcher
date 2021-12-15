import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(poke => {
        setPokemons(poke);
      });
    }, []);

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }
    
    // console.log(pokemons);
  const updatedPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search search={search} onSearchChange={setSearch} />
      <br />
      <PokemonCollection pokemons={updatedPokemons} />
    </Container>
  );
}

export default PokemonPage;
