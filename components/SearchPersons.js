import { useState } from "react";

export default function SearchPersons({ persons, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredPersons);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search persons"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
