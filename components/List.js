import styled from "styled-components";

const StyledListElement = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledList = styled.ul`
  padding-left: 0;
`;

export default function ListElement({ children }) {
  return <StyledListElement>{children}</StyledListElement>;
}

export function List({ children }) {
  return <StyledList>{children}</StyledList>;
}
