import React, { useState, useEffect } from "react";

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
    <>
      <h3>Game of Thrones Quotes</h3>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.sentence}>{quote.sentence}</li>
        ))}
      </ul>
      <button onClick={fetchNewQuotes}>Get New Quotes</button>
    </>
  );
}
