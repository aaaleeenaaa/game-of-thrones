import { IoLogoGameControllerB } from "react-icons/io";
import { GiStoneThrone } from "react-icons/gi";
import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  color: black;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  max-width: 100%;
  background-color: #adc9c9;
`;

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

const StyledIcon = styled.span`
  padding: 1rem 0.8rem 0 0.7rem;
  vertical-align: middle;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLink href="/">
        Game{" "}
        <StyledIcon>
          <IoLogoGameControllerB />
        </StyledIcon>
        of Thrones{" "}
        <StyledIcon>
          <GiStoneThrone />
        </StyledIcon>
      </StyledHeaderLink>
    </StyledHeader>
  );
}
