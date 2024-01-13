import { useState } from "react";
import styled from "styled-components";

const StyledSearchButton = styled.button`
  width: 5rem;
  margin: 0 auto 0.5rem;
`;

const StyledInput = styled.input`
width 12rem;
margin: 0 auto 0.5rem; 
`;

export default function Search({ data, onSearch, placeholder, propertyName }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    const filteredData = data.filter((item) =>
      item[propertyName].toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredData);
    setSearchTerm("");
  }

  return (
    <>
      <StyledInput
        type="text"
        placeholder={`Search ${placeholder}`}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <StyledSearchButton onClick={handleSearch}>Search</StyledSearchButton>
    </>
  );
}
