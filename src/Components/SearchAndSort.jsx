import React from "react";

const SearchAndSort = ({ setSearch, setSortBy }) => {
  return (
    <div className="space-y-4">
      <input
        placeholder="Search expenses..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full"
      />
      <div className="flex gap-4">
        <button onClick={() => setSortBy("category")} className="bg-gray-200 p-2 rounded">Sort by Category</button>
        <button onClick={() => setSortBy("description")} className="bg-gray-200 p-2 rounded">Sort by Description</button>
      </div>
    </div>
  );
};

export default SearchAndSort;