import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

const StyledNavbar = styled.nav`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.2rem;
  padding: 1rem 0;
  background-color: #c7eded;
`;

const StyledNavSection = styled.section`
  ${(props) =>
    props.isActive &&
    css`
      font-size: 2rem;
    `}
`;

export default function Navigation() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useLocalStorageState("activeItem", {
    defaultValue: "home",
  });

  useEffect(() => {
    const path = router.pathname;
    if (path === "/") {
      setActiveItem("home");
    } else if (path === "/houses") {
      setActiveItem("houses");
    } else if (path === "/persons") {
      setActiveItem("persons");
    } else if (path === "/quotes") {
      setActiveItem("quotes");
    }
  }, [router.pathname, setActiveItem]);

  return (
    <StyledNavbar>
      <Link href="/">
        <StyledNavSection isActive={activeItem === "home"}>
          Home
        </StyledNavSection>
      </Link>

      <Link href="/houses">
        <StyledNavSection isActive={activeItem === "houses"}>
          Houses
        </StyledNavSection>
      </Link>

      <Link href="/persons">
        <StyledNavSection isActive={activeItem === "persons"}>
          Persons
        </StyledNavSection>
      </Link>

      <Link href="/quotes">
        <StyledNavSection isActive={activeItem === "quotes"}>
          Quotes
        </StyledNavSection>
      </Link>
    </StyledNavbar>
  );
}
