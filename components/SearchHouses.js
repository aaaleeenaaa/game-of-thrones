import { useState } from "react";

export default function SearchHouses({ houses, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    const filteredHouses = houses.filter((house) =>
      house.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredHouses);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search houses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
