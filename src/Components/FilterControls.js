import React from "react";

const FilterControls = ({ filters, onFilterChange, onPageSizeChange, pageSize }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="text"
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) => onFilterChange("search", e.target.value)}
        className="mb-2 p-2 rounded-lg border-2 border-pink-500 text-gray-800 bg-pink-100"
      />
      <select value={filters.status} onChange={(e) => onFilterChange("status", e.target.value)} className="mb-2 p-2 rounded-lg border-2 border-pink-500 text-gray-800 bg-pink-100">
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={filters.species} onChange={(e) => onFilterChange("species", e.target.value)} className="mb-2 p-2 rounded-lg border-2 border-pink-500 text-gray-800 bg-pink-100">
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <select value={filters.gender} onChange={(e) => onFilterChange("gender", e.target.value)} className="mb-2 p-2 rounded-lg border-2 border-pink-500 text-gray-800 bg-pink-100">
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <input
        type="number"
        placeholder="Page Size"
        value={pageSize}
        onChange={(e) => onPageSizeChange(e.target.value)}
        className="mb-2 p-2 rounded-lg border-2 border-pink-500 text-gray-800 bg-pink-100"
      />
    </div>
  );
};

export default FilterControls;
