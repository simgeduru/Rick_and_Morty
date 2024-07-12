import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 min-h-screen bg-pink-200">
      <h1 className="text-4xl text-center mb-6 text-pink-600">{character.name}</h1>
      <div className="flex justify-center">
        <div className="bg-pink-100 rounded-lg shadow-lg p-6 w-full md:w-1/2">
          <img src={character.image} alt={character.name} className="rounded-lg mb-6 mx-auto" />
          <div className="text-center text-blue-800">
            <p className="mb-2"><strong>Status:</strong> {character.status}</p>
            <p className="mb-2"><strong>Species:</strong> {character.species}</p>
            <p className="mb-2"><strong>Gender:</strong> {character.gender}</p>
            <p className="mb-2"><strong>Origin:</strong> {character.origin.name}</p>
            <p className="mb-2"><strong>Location:</strong> {character.location.name}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {/* karakter listesine donme islemi*/}
        <Link to="/" className="py-2 px-4 rounded-lg bg-blue-500 text-white">
          Back to Characters
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
