import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});
  // valor do estado que guarda infos e foto do pokemon

  // método que roda ao montar o componente
  useEffect(() => {
    getPokemon(props.pokemon);
  }, []);

  useEffect(() => {
    getPokemon(props.pokemon);
  }, [props.pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const getPokemon = (pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`
    ).then((response) => {
    // guarda as infos do pokemon no estado
    setPokemon(response.data);
    })
    .catch((err) => {
    console.log(err);
    });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
