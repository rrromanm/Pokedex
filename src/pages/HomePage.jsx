import { useEffect, useState } from "react";
import PokemonTable from "../components/PokemonTable";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008");
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
      <h1 className="text-3xl font-bold my-4">Pokédex</h1>
      <PokemonTable pokemons={currentPokemons} />

      <div className="flex gap-4 my-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-400"
        >
          Back
        </button>

        <span>Page {currentPage}</span>

        <button
          onClick={() => setCurrentPage((prev) => (indexOfLastItem < pokemons.length ? prev + 1 : prev))}
          disabled={indexOfLastItem >= pokemons.length}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
