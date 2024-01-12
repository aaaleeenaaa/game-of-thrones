import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function House() {
  const router = useRouter();
  const { slug } = router.query;
  const [houseData, setHouseData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `https://api.gameofthronesquotes.xyz/v1/house/${slug}`
          );

          if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data);
            setHouseData(data[0]);
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

  if (!slug || loading) {
    return <p>Loading...</p>;
  }

  console.log("House data", houseData);

  return (
    <div>
      {houseData ? (
        <>
          <h3>{houseData.name}</h3>
          <h4>Members:</h4>
          {houseData.members && houseData.members.length > 0 ? (
            <ul>
              {houseData.members.map((member) => (
                <li key={member.slug}>{member.name}</li>
              ))}
            </ul>
          ) : (
            <p>No members found</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
