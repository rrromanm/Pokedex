import { useEffect, useState } from "react";
import PokemonTable from "../components/PokemonTable";
import Header from "../components/header";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1026");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <PokemonTable pokemons={currentPokemons} />
      <div className="container mt-3 d-flex justify-content-between">
        <button 
        className="rounded" 
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}>Back</button>

        <>
          <span>Page {currentPage}</span>
        </>

        <button 
        className="rounded"
        onClick={() => setCurrentPage((prev) => (indexOfLastItem < pokemons.length ? prev + 1 : prev))}
        disabled={indexOfLastItem >= pokemons.length}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
