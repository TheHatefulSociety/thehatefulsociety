import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 7rem;
  padding: 3rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text.textColor};
  font-family: Earwig Factory;
  font-size: 8rem;
  @media (max-width: 977px) {
    font-size: 3rem;
  }
`;

const Footer = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem;
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
`;

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Hateful Society - 404</title>
      </Head>
      <Wrapper>
        <Text>Not coming soon either.</Text>
        <Footer>
          <Link href={"/"} passHref>
            <FooterItem>Never rush good things.</FooterItem>
          </Link>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Error404;
