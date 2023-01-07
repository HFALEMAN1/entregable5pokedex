import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Pokecard.css";

const PokeCard = ({ pokemon }) => {
  const [dataPokemon, setDataPokemon] = useState();
  const types = dataPokemon?.types.map((type) => type.type.name).join("/");

  const navigate = useNavigate();

  const handleClickPokemon = () => {
    navigate(`/pokedex/${dataPokemon?.id}`);
  };

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setDataPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article
      onClick={handleClickPokemon}
      className={`poke-card border-${dataPokemon?.types[0].type.name}`}
    >
      <section
        className={`poke-card__header bg-lg-${dataPokemon?.types[0].type.name}`}
      ></section>
      <section className="poke-card__content">
        <img
          className="poke-card__img"
          src={dataPokemon?.sprites.other["official-artwork"].front_default}
        />
        <h3 className="poke-card__name">{pokemon.name}</h3>
        <p className="poke-card__types">{types}</p>
        <p className="poker-card__types-title">Type</p>
      </section>

      <section className="poke-card__stats">
        {dataPokemon?.stats.map((stat) => (
          <div key={stat.stat.name} className="poke-card__stat">
            <p className="poke-card__stat-name">{stat.stat.name}</p>
            <p className={`poke-card__stat-value color-${dataPokemon?.types[0].type.name}`}>{stat.base_stat}</p>
          </div>
        ))}
      </section>

      <section className="loader">
        <div className={`loader__section up ${dataPokemon ? "animationActive" : ""}`}>
          <div className="loader__black up">
            <div className="loader__circle">
              <div className="loader__circle-int"></div>
            </div>
          </div>
        </div>
        <div className={`loader__section down ${dataPokemon ? "animationActive" : ""}`}>
          <div className="loader__black down">

          </div>
        </div>
      </section>
    </article>
  );
};

export default PokeCard;
