import React from "react";
import PokeCard from "./PokeCard";
import "./styles/ListPokemons.css";

const ListPokemon = ({ pokemons }) => {
  return (
    <section className="List-pokemons">
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.url} />
      ))}
    </section>
  );
};

export default ListPokemon;
