import React, {useState, useEffect} from "react";
import "./App.css"
import axios from "axios";
import PokeCard from "./components/PokeCard"

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  // método que roda ao montar o componente
  useEffect(() => {
    getPokeList()
  },[])

  const getPokeList = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151"
    ).then((response) => {
      // função que está setando no estado os 151 pokemons
      setPokeList(response.data.results);
    }).catch((err) => {
      console.log(err);
    });
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default App;
