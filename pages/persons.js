import SearchPersons from "@/components/SearchPersons";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Persons() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/characters"
        );
        const data = await response.json();
        setPersons(data);
        setFilteredPersons(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleSearch(filtered) {
    setFilteredPersons(filtered);
  }

  return (
    <>
      <h3>Game of Thrones Persons</h3>
      <SearchPersons persons={persons} onSearch={handleSearch} />
      <ul>
        {filteredPersons.map((character) => (
          <li key={character.id}>
            <Link href={`/character/${character.slug}`}>
              {character.name} - {character.house && character.house.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
