import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Search from "@/components/Search";
import ListElement, { List } from "@/components/List";

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

  function handlePersonsSearch(filtered) {
    setFilteredPersons(filtered);
  }

  return (
    <Card>
      <h3>Game of Thrones Persons</h3>
      <Search
        data={persons}
        onSearch={handlePersonsSearch}
        placeholder="persons"
        propertyName="name"
      />
      <List>
        {filteredPersons.map((character) => (
          <ListElement key={character.id}>
            <Link href={`/character/${character.slug}`}>
              {character.name} -{" "}
              {character.house ? character.house.name : "No House"}
            </Link>
          </ListElement>
        ))}
      </List>
    </Card>
  );
}
