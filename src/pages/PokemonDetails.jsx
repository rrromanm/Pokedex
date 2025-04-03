import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";

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
            
            <div className="container mt-5 d=flex justify-content-center">
                <div className="row pokemon-details">
                    <div className="col-md-6">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
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
            <Sidebar />
        </>
    );
};

export default PokemonDetails;