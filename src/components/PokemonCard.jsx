import React from "react";

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

const PokemonCard = ({ pokemon }) => {
    const pokemonType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[pokemonType] || typeColors.default;

    const cardStyle = {
        backgroundColor,
        
    };

    return (
        <div className="container rounded-top" style={cardStyle}>
            <div className="row">
                <div className="col-6">
                    <p>#{pokemon.id}</p>
                    <h3 className="text-white">{pokemon.name}</h3>
                </div>
                
                <div className="col-6 text-center">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
