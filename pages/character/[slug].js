import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Character() {
  const router = useRouter();
  const { slug } = router.query;
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `https://api.gameofthronesquotes.xyz/v1/character/${slug}`
          );

          // Check if the response status is successful (2xx)
          if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data);
            setCharacterData(data[0]);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {characterData ? (
        <>
          <h3>{characterData.name}</h3>
          <p>House: {characterData.house.name}</p>
          <h4>Quotes:</h4>
          <ul>
            {characterData.quotes.map((quote, index) => (
              <li key={index}>{quote}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
