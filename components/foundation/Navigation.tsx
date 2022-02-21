import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import NavItem from './NavItem';

const StyledNav = styled.ul`
  margin: 0 auto;
  background: rgba(255,255,255,0.9);
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  list-style-type: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1100px;
  z-index: 10;
`;

const Navigation = () => { 
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMiniNav = scrollY > 100;

  return (
    <StyledNav>
      <NavItem 
        link="/" 
        label="About Me" 
        icon="/nav/about-me.png" 
        image=""
        miniNav={isMiniNav}
      />
      <NavItem 
        link="/blog" 
        label="Blog" 
        icon="/nav/blog.png"
        image=""
        miniNav={isMiniNav}
      />
      <NavItem 
        link="/side-projects" 
        label="Side Projects" 
        icon="/nav/side-projects.png" 
        image=""
        miniNav={isMiniNav}
      />
      <NavItem 
        link="https://fionoble.shop" 
        external 
        label="Shop" 
        icon="/nav/shop.png" 
        image=""
        miniNav={isMiniNav}
      />
    </StyledNav>
  )
};

export default Navigation;
