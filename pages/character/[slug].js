import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import ListElement, { List } from "@/components/List";
import styled from "styled-components";

const StyledCharacterPageButton = styled.button`
  width: 15%;
  margin: 0 auto 0.5rem;
`;

export default function Character() {
  const router = useRouter();
  const { slug } = router.query;
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuotes, setCurrentQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `https://api.gameofthronesquotes.xyz/v1/character/${slug}`
          );

          if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data);
            setCharacterData(data[0]);
            setCurrentQuotes(data[0].quotes);
          } else {
            console.error(
              "Error in API response:",
              response.status,
              response.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const handleShuffleQuotes = async () => {
    const shuffledQuotes = [...currentQuotes].sort(() => Math.random() - 0.5);
    setCurrentQuotes(shuffledQuotes);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleButtonClick() {
    router.push("/persons");
  }

  return (
    <Card>
      {characterData ? (
        <>
          <h3>{characterData.name}</h3>
          <p>
            House:{" "}
            {characterData.house ? (
              <Link href={`/house/${characterData.house.slug}`}>
                {characterData.house.name}
              </Link>
            ) : (
              "No House"
            )}
          </p>
          <h4>All Quotes:</h4>
          <List>
            {currentQuotes.map((quote, index) => (
              <ListElement key={index}>{quote}</ListElement>
            ))}
          </List>
          <StyledCharacterPageButton onClick={handleShuffleQuotes}>
            Replace Quotes
          </StyledCharacterPageButton>
        </>
      ) : null}
      <StyledCharacterPageButton onClick={handleButtonClick}>
        All characters
      </StyledCharacterPageButton>
    </Card>
  );
}
