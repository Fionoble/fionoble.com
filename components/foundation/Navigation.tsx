import styled from 'styled-components';
import NavItem from './NavItem';

const StyledNav = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  list-style-type: none;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1100px;
  z-index: 10;
`;

const Navigation = () => (
  <StyledNav>
    <NavItem 
      link="/" 
      label="About Me" 
      icon="/nav/about-me.png" 
      image=""
    />
    <NavItem 
      link="/blog" 
      label="Blog" 
      icon="/nav/blog.png"
      image=""
    />
    <NavItem 
      link="/side-projects" 
      label="Side Projects" 
      icon="/nav/side-projects.png" 
      image=""
    />
    <NavItem 
      link="https://fionoble.shop" 
      external 
      label="Shop" 
      icon="/nav/shop.png" 
      image=""
    />
  </StyledNav>
);

export default Navigation;
