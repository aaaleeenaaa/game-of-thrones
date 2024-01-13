import Header from "./Header.js";
import Head from "next/head";
import Navigation from "./Navigation.js";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("/gameofthrones.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Game of Thrones</title>
      </Head>
      <Header />
      <Navigation />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
