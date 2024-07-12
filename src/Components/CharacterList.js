import React from "react";
import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  return (
    <table className="min-w-full bg-pink-100 rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-pink-500 text-white">
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Species</th>
          <th className="py-2 px-4">Gender</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id} className="text-center border-b-2 border-pink-300">
            <td className="py-2 px-4">
              {/* karakter details sayfasına yonlenme */}
              <Link to={`/character/${character.id}`} className="text-blue-500 hover:text-blue-700">
                {character.name}
              </Link>
            </td>
            <td className="py-2 px-4">{character.status}</td>
            <td className="py-2 px-4">{character.species}</td>
            <td className="py-2 px-4">{character.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterList;
