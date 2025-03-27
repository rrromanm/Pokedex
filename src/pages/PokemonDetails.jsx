import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <h1>Pokemon Details</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <div className="col-md-6">
                        <h2>{pokemon.name}</h2>
                        <p>Height: {pokemon.height}</p>  
                        <p>Weight: {pokemon.weight}</p>
                        <p>Types: {pokemon.types.map(type => type.type.name).join(", ")}</p>
                        <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonDetails;