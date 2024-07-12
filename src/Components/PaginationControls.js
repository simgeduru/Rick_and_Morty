import React from "react";

const PaginationControls = ({ page, onPageChange }) => {
  return (
    
    <div className="flex justify-center mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="py-2 px-4 mx-2 rounded-lg bg-pink-500 text-white disabled:opacity-50"
      >
        Previous
      </button>
      <span className="py-2 px-4 mx-2 rounded-lg bg-pink-200 text-gray-800">{page}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        className="py-2 px-4 mx-2 rounded-lg bg-pink-500 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
