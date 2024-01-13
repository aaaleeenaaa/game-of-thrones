import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import ListElement, { List } from "@/components/List";
import styled from "styled-components";

const StyledHousePageButton = styled.button`
  width: 6rem;
  margin: 0 auto 0.5rem;
`;

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

  function handleButtonClick() {
    router.push("/houses");
  }

  return (
    <Card>
      {houseData ? (
        <>
          <h3>{houseData.name}</h3>
          <h4>Members:</h4>
          {houseData.members && houseData.members.length > 0 ? (
            <List>
              {houseData.members.map((member) => (
                <ListElement key={member.slug}>
                  <Link href={`/character/${member.slug}`}>{member.name}</Link>
                </ListElement>
              ))}
            </List>
          ) : (
            <p>No members found</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      <StyledHousePageButton onClick={handleButtonClick}>
        All houses
      </StyledHousePageButton>
    </Card>
  );
}
