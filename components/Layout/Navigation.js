import styled, { css } from "styled-components";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";

const StyledNavbar = styled.nav`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.2rem;
`;

const StyledNavSection = styled.section`
  background-color: transparent;
  ${(props) =>
    props.isActive &&
    css`
      background-color: var(--activeBackground);
      border-radius: 10%;
      font-size: 2rem;
    `}
`;

export default function Navigation() {
  const [activeItem, setActiveItem] = useLocalStorageState("activeItem", {
    defaultValue: "home",
  });

  function handleClick(item) {
    setActiveItem(item);
  }

  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavSection
          isActive={activeItem === "home"}
          onClick={() => handleClick("home")}
        >
          Home
        </StyledNavSection>
      </Link>

      <Link href="/houses">
        <StyledNavSection
          isActive={activeItem === "houses"}
          onClick={() => handleClick("houses")}
        >
          Houses
        </StyledNavSection>
      </Link>

      <Link href="/persons">
        <StyledNavSection
          isActive={activeItem === "persons"}
          onClick={() => handleClick("persons")}
        >
          Persons
        </StyledNavSection>
      </Link>

      <Link href="/quotes">
        <StyledNavSection
          isActive={activeItem === "quotes"}
          onClick={() => handleClick("quotes")}
        >
          Quotes
        </StyledNavSection>
      </Link>
    </StyledNavbar>
  );
}
