import Header from "./Header.js";
import Head from "next/head";
import Navigation from "./Navigation.js";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Game of Thrones</title>
      </Head>
      <Header />
      <Navigation />
      <main>{children}</main>
    </>
  );
}
