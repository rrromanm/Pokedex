import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/SocialsFooter";

const PokemonDetails = () => {
  const { id } = useParams();
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  if (!pokemon) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <>
      <Header />

      <div className="container mt-5 d-flex justify-content-center">
        <div className="row g-4">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{pokemon.name}</h1>
            <h5>Height: {pokemon.height}</h5>
            <h5>Base Experience: {pokemon.base_experience}</h5>
            <h5>Weight: {pokemon.weight}</h5>
            <h5>
              Types: {pokemon.types.map((type) => type.type.name).join(", ")}
            </h5>
            <h5>
              Abilities:{" "}
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </h5>
            <h5>Stats:</h5>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PokemonDetails;
