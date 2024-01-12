import React, { useState, useEffect } from "react";
import SearchHouses from "@/components/SearchHouses";
import Link from "next/link";

export default function Houses() {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/houses"
        );
        const data = await response.json();
        setHouses(data);
        setFilteredHouses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleSearch(filtered) {
    setFilteredHouses(filtered);
  }

  return (
    <>
      <h3>Game of Thrones Houses</h3>
      <SearchHouses houses={houses} onSearch={handleSearch} />
      <ul>
        {filteredHouses.map((house) => (
          <li key={house.id}>
            <Link href={`/house/${house.slug}`}>{house.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
