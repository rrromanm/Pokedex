import React, {useState, useEffect} from 'react';
import Header from '../components/header';
import PokemonCard from '../components/PokemonCard';



const HomePage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';

    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <PokemonCard pokemon={pokemon} />
        )}
      </>
    </>
  );
};

export default HomePage;
