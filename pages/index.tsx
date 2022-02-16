import styled from 'styled-components';
import Image from 'next/image';


const ImageLayout = styled.div`
  float: left;
  padding-right: 25px;
`;

const ConnectLinkStyled = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-weight: 800;
  display:flex;
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

type ConnectLinkProps = {
  imgSrc: string;
  mediaLink: string;
  children: string;
};

const ConnectLink = (props: ConnectLinkProps) => {
  const {imgSrc, mediaLink, children} = props;
  const iconSize = 26;

  return (
    <a href={mediaLink} target="_blank" rel="noreferrer">
      <ConnectLinkStyled>
        <Image src={imgSrc} width={iconSize} height={iconSize} />
        <div>{children}</div>
      </ConnectLinkStyled>
    </a>
  );
}

function Home() {
  return (
    <>
      <h1>{`Welcome to my little corner of the internet!`}</h1>
      <ImageLayout>
        <Image 
          src="/welcome_wave.jpg"
          width={240}
          height={440}
          alt="A picture of me!"
        />
      </ImageLayout>
      <p>
        {`I'm Phiroze Noble (or Fionoble). I'm a Web Development manager based out of Toronto, Canada. 
        I like warm hugs, coffee and great conversations! I decided to make this site for fun and really... 
        who is a web dev without a web site? That and I wanted to share all the fun things I'm working on! 
        I have a ton of hobbies (more so since COVID) and this was the best way I could think of to share them.`}
      </p>
      <div>
        <h3>{`If you're interested in getting in touch:`}</h3>
        <ul>
          <ConnectLink 
            imgSrc="/icons/linkedin.png" 
            mediaLink="https://www.linkedin.com/in/fionoble">
              Linked In
          </ConnectLink>
          <ConnectLink 
            imgSrc="/icons/github.png" 
            mediaLink="https://github.com/fionoble">
              Github
          </ConnectLink>
          <ConnectLink 
            imgSrc="/icons/instagram.png" 
            mediaLink="https://www.instagram.com/fionoble/">
              Instagram
          </ConnectLink>
        </ul>
      </div>
    </>
  );
}

export default Home;
