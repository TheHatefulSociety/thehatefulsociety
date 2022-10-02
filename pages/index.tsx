import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4rem;
  padding: 1.5rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-family: Earwig Factory;
  font-size: 4rem;

  :last-of-type {
    font-size: 8rem;
  }

  @media (max-width: 977px) {
    font-size: 3rem;
    :last-of-type {
      font-size: 6rem;
    }
  }

  @media (max-width: 412px) {
    font-size: 1.5rem;
    :last-of-type {
      font-size: 3rem;
    }
  }
`;

const Footer = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 5rem;
  row-gap: 1.5rem;
  padding: 0 1rem;
`;

const FooterItem = styled.a`
  color: ${({ theme }) => theme.text.textColor};
  font-family: Earwig Factory;
  font-size: 3rem;
  text-decoration: none;

  @media (max-width: 977px) {
    font-size: 2rem;
  }

  @media (max-width: 412px) {
    font-size: 1.3rem;
  }
`;

const ThemeButton = styled.button`
  font-size: 3rem;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  position: absolute;
  top: 4rem;
  right: 4rem;
  @media (max-width: 624px) {
    font-size: 2rem;
    top: 2rem;
    right: 2rem;
  }
`;

type ThemeTypes = "dark" | "light" | "system";

const Index: NextPage = () => {
  const [localStorageTheme, setLocalStorageTheme] = useState<ThemeTypes>();

  const onThemeChange = (theme: ThemeTypes) => {
    setLocalStorageTheme(theme);
    localStorage.setItem("theme", theme);

    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    setLocalStorageTheme(
      (localStorage.getItem("theme") as ThemeTypes) ?? "system",
    );
  }, []);

  return (
    <>
      <Head>
        <title>The Hateful Society</title>
      </Head>
      <Wrapper>
        <ThemeButton
          onClick={() =>
            onThemeChange(localStorageTheme === "light" ? "dark" : "light")
          }
        >
          💡
        </ThemeButton>
        <Text>The Hateful Society</Text>
        <Text>Not coming soon.</Text>
        <Footer>
          <Link href={"/instagram"} passHref>
            <FooterItem target="_blank" rel="noopener noreferrer">
              Instagram
            </FooterItem>
          </Link>
          <Link href={"/twitter"} passHref>
            <FooterItem target="_blank" rel="noopener noreferrer">
              Twitter
            </FooterItem>
          </Link>
          <Link href={"/github"} passHref>
            <FooterItem target="_blank" rel="noopener noreferrer">
              GitHub
            </FooterItem>
          </Link>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Index;
