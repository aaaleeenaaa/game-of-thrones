import styled from "styled-components";

const StyledCardElement = styled.article`
  margin: 15px 0px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  position: relative;
  background-color: white;
  margin-top: 3rem;
`;

export default function Card({ children }) {
  return <StyledCardElement>{children}</StyledCardElement>;
}
