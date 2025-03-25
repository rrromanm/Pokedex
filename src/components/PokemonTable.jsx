import PokemonCard from "./PokemonCard";

const PokemonTable = ({ pokemons }) => {
  return (
    <div className="container">
        <div className="row">
            {pokemons.map((pokemon, index) => (
                <div className="col-md-3 pt-3" key={index}>
                    <PokemonCard name={pokemon.name} url={pokemon.url} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default PokemonTable;
