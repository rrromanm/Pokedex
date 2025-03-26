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
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h1>Height: {pokemon.height}</h1>   
        </>
    );
};

export default PokemonDetails;