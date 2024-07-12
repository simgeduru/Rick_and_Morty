import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./Components/CharacterList.js";
import CharacterDetails from "./CharacterDetails.js";
import FilterControls from "./Components/FilterControls.js";
import PaginationControls from "./Components/PaginationControls.js";
import "tailwindcss/tailwind.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    species: "",
    gender: "",
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter((character) => (filters.status ? character.status === filters.status : true))
    .filter((character) => (filters.species ? character.species === filters.species : true))
    .filter((character) => (filters.gender ? character.gender === filters.gender : true));

  return (
    <div className="p-6 min-h-screen bg-pink-200">
      <h1 className="text-4xl text-center mb-6 text-pink-600">Rick and Morty Characters</h1>
      
      {/*filtre ve sayfa sayısı kontrolü */}
      <FilterControls filters={filters} onFilterChange={handleFilterChange} onPageSizeChange={handlePageSizeChange} pageSize={pageSize} />

      {/* loading mesajı */}
      {loading && <p className="text-center">Loading...</p>}
      {/* error mesajı sayfa yuklenemediginde */}
      {error && <p className="text-center text-red-500">Error: {error.message}</p>}
      
      {!loading && !error && (
        <>
          {/* karakter listesini gosterme*/}
          <CharacterList characters={filteredCharacters.slice(0, pageSize)} />
          {/* pagination'ı gosterme */}
          <PaginationControls page={page} onPageChange={handlePageChange} />
        </>
      )}
      
      {/* karakter ayrıntısı icin routing islemi*/}
      <Routes>
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
};

export default App;
