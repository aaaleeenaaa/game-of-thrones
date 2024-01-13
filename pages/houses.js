import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Search from "@/components/Search";
import ListElement, { List } from "@/components/List";

export default function Houses() {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.gameofthronesquotes.xyz/v1/houses"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setHouses(data);
        setFilteredHouses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function handleHousesSearch(filtered) {
    setFilteredHouses(filtered);
  }

  return (
    <Card>
      <h3>Game of Thrones Houses</h3>
      <Search
        data={houses}
        onSearch={handleHousesSearch}
        placeholder="houses"
        propertyName="name"
      />
      <List>
        {filteredHouses.map((house) => (
          <ListElement key={house.name}>
            <Link href={`/house/${house.slug}`}>{house.name}</Link>
          </ListElement>
        ))}
      </List>
    </Card>
  );
}
