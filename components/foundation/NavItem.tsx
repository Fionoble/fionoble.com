import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '../../utils/useWindowSize';

const StyledNavItem = styled.li`
  margin: 0 10px 0 0;
  padding: 0;
  height: 200px;
  background-color: #fff;
  position: relative;
  flex: 1;
  list-style-type: none;
  border: 3px black solid;
  border-top: 0px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
  cursor: pointer;

  .nav-item-title {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 24px;
    color: #000;
  }

  &:last-child{
    margin: 0;
  }

  @media only screen and (max-width: 800px) {
    &:hover {
      height: 230px;
      transition: height 0.1s ease-out;
    }
  }

  // Tablet
  @media only screen and (max-width: 800px) {
    height: 60px;

    .nav-item-title {
      font-size: 18px;
    }

    &:active {
      background-color: #ddd;
    }

    &:hover {
      height: 60px;
      transition: background-color 0.1s ease-out;
    }
  }

  // Mobile
  @media only screen and (max-width: 600px) {
    height: 50px;
    margin: 0;

    .nav-item-title {
      font-size: 14px;
      bottom: -5px;
    }

    &:active {
      background-color: #ddd;
    }

    &:hover {
      height: 50px;
      transition: background-color 0.1s ease-out;
    }
  }
`;

const NavIconWrapper = styled.div`
  margin: 0 auto;
`;

const NavIcon = (props: {iconUrl: string}) =>  (
  <NavIconWrapper>
    <Image 
      width="40"
      height="40"
      src={props.iconUrl}
    />
  </NavIconWrapper>
)

const NavItem = (props) => {
  // TODO - Make an onclick and programmatically send them to the external links
  const {icon, label, link, external} = props;
  const screen = useWindowSize();

  const content = (screen.width && screen.width < 601 ? 
    <NavIcon iconUrl={icon} /> : label)

  if(external) return (
    <StyledNavItem>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="nav-item-title">
          {content}
        </div>
      </a>
    </StyledNavItem>
  );
 

  return (
    <Link href={link} passHref>
      <StyledNavItem>
        <div className="nav-item-title">
          {content}
        </div>
      </StyledNavItem>
    </Link>
  )
};

export default NavItem;
