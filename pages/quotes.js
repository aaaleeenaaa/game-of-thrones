import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import ListElement, { List } from "@/components/List";
import styled from "styled-components";

const StyledQuotesButton = styled.button`
  width: 15%;
  margin: 0 auto 0.5rem;
`;

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const fetchNewQuotes = async () => {
    try {
      const response = await fetch(
        "https://api.gameofthronesquotes.xyz/v1/random/5"
      );
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNewQuotes();
  }, []);

  return (
    <Card>
      <h3>Game of Thrones Quotes</h3>
      <List>
        {quotes.map((quote) => (
          <ListElement key={quote.sentence}>
            {quote.sentence} -{" "}
            <Link href={`/character/${quote.character.slug}`}>
              {quote.character.name}
            </Link>
          </ListElement>
        ))}
      </List>
      <StyledQuotesButton onClick={fetchNewQuotes}>
        Get New Quotes
      </StyledQuotesButton>
    </Card>
  );
}
