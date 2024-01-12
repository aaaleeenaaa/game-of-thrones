import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Character() {
  const router = useRouter();
  const { slug } = router.query;
  const [characters, setCharacters] = useState([]);
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
    <>
      <div>
        <h3>{slug.name}</h3>
        {characters && characters.length > 0 ? (
          <ul>
            {characters.map(({ name, slug }) => (
              <li key={slug}>{name}</li>
            ))}
          </ul>
        ) : (
          <div>No members found</div>
        )}
      </div>
    </>
  );
}
