import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function House() {
  const router = useRouter();
  const { slug } = router.query;
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const response = await fetch(
            `https://api.gameofthronesquotes.xyz/v1/house/${slug}`
          );

          // Check if the response status is successful (2xx)
          if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data);

            // Ensure that 'members' is an array before setting state
            if (Array.isArray(data.members)) {
              setMembers(data.members);
            } else {
              console.error("Invalid 'members' data:", data.members);
            }
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
      <h3>{slug} Members</h3>
      {members && members.length > 0 ? (
        <ul>
          {members.map((member) => (
            <li key={member.slug}>{house.member.name}</li>
          ))}
        </ul>
      ) : (
        <div>No members found</div>
      )}
    </div>
  );
}
