import styled from 'styled-components';
import NavItem from './NavItem';

const StyledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  list-style-type: none;
  height: 200px;
`;


const Navigation = () => (
  <StyledNav>
    <NavItem link="/" label="About Me" image=""/>
    <NavItem link="/blog" label="Blog" image=""/>
    <NavItem link="/side-projects" label="Side Projects" image=""/>
    <NavItem link="https://fionoble.shop" external label="Shop" image=""/>
  </StyledNav>
);

export default Navigation;
