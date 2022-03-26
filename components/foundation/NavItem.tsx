import {FC} from 'react'
import styled, {css} from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import useWindowSize from '../../utils/useWindowSize'

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
  transition: height 0.1s;

  ${props => {
    if(props.miniNav) {

      return (css`
        height: 70px;
      `)}
  }
}

  
  .nav-item-title {
    width: 100%;
    text-align: center;
    position: absolute;
    font-weight: 800;
    bottom: 5px;
    font-size: 24px;
    color: #000;
    z-index: 2;
  }

  &:last-child{
    margin: 0;
  }

    ${props => {
    if(props.bgImage) {
  
      return (css`
          background-image: url(${props.bgImage});
          background-position: center; /* Center the image */
          background-repeat: no-repeat; /* Do not repeat the image */
          background-size: cover;
        `)}
  }
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
    background-image: none;
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
`
const WhiteOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,0.8);
  z-index: 1;
`

const NavIconWrapper = styled.div`
  margin: 0 auto;
`

type NavIconProps = {
  iconUrl: string;
  alt: string;
};

const NavIcon = (props: NavIconProps) =>  (
  <NavIconWrapper>
    <Image 
      width="40"
      height="40"
      src={props.iconUrl}
      alt={props.alt}
    />
  </NavIconWrapper>
)

type NavItemProps = {
  icon: string;
  label: string;
  link: string;
  miniNav: boolean;
  external?: boolean;
  image?: string;
}

const NavItem: FC<NavItemProps>  = (props) => {
  // TODO - Make an onclick and programmatically send them to the external links
  const {icon, label, link, external, miniNav, image} = props
  const screen = useWindowSize()

  const content = (screen.width && screen.width < 601 ? 
    <NavIcon iconUrl={icon} alt={label} /> : label)

  if(external) return (
    <StyledNavItem miniNav={miniNav} bgImage={image}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="nav-item-title">
          {content}
        </div>
      </a>
      <WhiteOverlay />
    </StyledNavItem>
  )
 

  return (
    <Link href={link} passHref>
      <StyledNavItem miniNav={miniNav} bgImage={image}>
        <div className="nav-item-title">
          {content}
        </div>
        <WhiteOverlay />
      </StyledNavItem>
    </Link>
  )
}

export default NavItem
