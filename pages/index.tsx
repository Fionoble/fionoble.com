import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

const ImageLayout = styled.div`
  @media only screen and (min-width: 520px) {
    padding-right: 25px;
    float: left;
  }

  @media only screen and (max-width: 520px) {
    margin: 0 auto;
    display: block;
    width: 240px;
  }
`;

const MainContent = styled.p``;
const SocialWrapper = styled.div`
  @media only screen and (max-width: 640px) {
    clear: both;
    width: 100%;
  }
`;

const ConnectListWrapper = styled.ul`
  @media only screen and (max-width: 640px) {
    padding-left: 0;
  }
`;

const ConnectLinkStyled = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-weight: 800;
  display: flex;
  align-items: center;
  transition: padding 0.1s;
  margin-bottom: 20px;
  color: black;

  div {
    padding-left: 10px;
  }

  :hover {
    padding-left: 15px;
  }
`;

type ConnectLink = {
  imgSrc: string;
  mediaLink: string;
};

const ConnectLink: FC<ConnectLink> = (props) => {
  const { imgSrc, mediaLink, children } = props;
  const iconSize = 26;

  return (
    <a href={mediaLink} target="_blank" rel="noreferrer">
      <ConnectLinkStyled>
        <Image
          src={imgSrc}
          width={iconSize}
          height={iconSize}
          alt={String(children)}
        />
        <div>{children}</div>
      </ConnectLinkStyled>
    </a>
  );
};

function Home() {
  return (
    <>
      <h1>{"Welcome to my little corner of the internet!"}</h1>
      <ImageLayout>
        <Image
          src="/welcome_wave.jpg"
          width={240}
          height={440}
          alt="A picture of me!"
        />
      </ImageLayout>
      <MainContent>
        {`I'm Phiroze Noble (or Fionoble). I'm a Web Development manager based out of Toronto, Canada.
        I like warm hugs, coffee and great conversations! Catch me in and around Toronto while I'm working at Shopify.`}
      </MainContent>
      <SocialWrapper>
        <h3>{"If you're interested in getting in touch:"}</h3>
        <ConnectListWrapper>
          <ConnectLink
            imgSrc="/icons/linkedin.png"
            mediaLink="https://www.linkedin.com/in/fionoble"
          >
            Linked In
          </ConnectLink>
          <ConnectLink
            imgSrc="/icons/github.png"
            mediaLink="https://github.com/fionoble"
          >
            Github
          </ConnectLink>
          <ConnectLink
            imgSrc="/icons/instagram.png"
            mediaLink="https://www.instagram.com/fionoble/"
          >
            Instagram
          </ConnectLink>
        </ConnectListWrapper>
      </SocialWrapper>
    </>
  );
}

export default Home;
