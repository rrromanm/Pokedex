import React, { useEffect, useState } from "react";

const typeColors = {
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    default: '#A8A77A',
};

const PokemonCard = ({ name, url }) => {
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

    const pokemonType = pokemon.types?.[0]?.type?.name || "default";
    const backgroundColor = typeColors[pokemonType] || typeColors.default;

    return (
        <div className="w-100 h-100 container rounded pokemon-card" style={{ backgroundColor }}>
            <div className="row">
                <div className="col-6">
                    <p>#{pokemon.id}</p>
                    <h5 className="text-white">{pokemon.name}</h5>
                </div>

                <div className="col-6 text-center">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
