import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4"
    >
      <input
        type="text"
        placeholder="Search by Post Title"
        value={query}
        onChange={handleChange}
        className="border rounded p-2 w-full sm:w-2/3 lg:w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;