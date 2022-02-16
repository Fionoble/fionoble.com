import Image from 'next/image';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 12px 0 0;
  padding: 16px; 40px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0,0,0,0.3);
`;

const Copyright = styled.div`
  font-size: 14px;
  order: 1;
  flex-grow: 2;
`;

const FollowMeWrapper = styled.ul`
  order: 2;
`;

const FollowMeItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-weight: 800;
  display: inline-block;
  
  margin-left: 20px;
  color: black;
  transition: transform 0.1s;

  :hover {
    transform: translateY(-5px);
  }
`;

type ConnectLinkProps = {
  imgSrc: string;
  mediaLink: string;
};

const ConnectLink = (props: ConnectLinkProps) => {
  const {imgSrc, mediaLink} = props;
  const iconSize = 26;

  return (
    <a href={mediaLink} target="_blank" rel="noreferrer">
      <FollowMeItem>
        <Image src={imgSrc} width={iconSize} height={iconSize} />
      </FollowMeItem>
    </a>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <Copyright>Copyright Fionoble.com 2021</Copyright>
      <FollowMeWrapper>
        <ConnectLink 
          imgSrc="/icons/linkedin.png" 
          mediaLink="https://www.linkedin.com/in/fionoble"
        />
        <ConnectLink 
          imgSrc="/icons/github.png" 
          mediaLink="https://github.com/fionoble"
        />
        <ConnectLink 
          imgSrc="/icons/instagram.png" 
          mediaLink="https://www.instagram.com/fionoble/"
        />
      </FollowMeWrapper>
    </FooterContainer>
  )
}

export default Footer;