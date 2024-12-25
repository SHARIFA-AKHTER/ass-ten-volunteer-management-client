import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center p-4">
      <input 
        type="text" 
        placeholder="Search by Post Title" 
        value={query} 
        onChange={handleChange}
        className="border rounded p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;