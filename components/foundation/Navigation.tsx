import {Navigation as Nav} from '../styles/NavigationStyles';
import NavItem from './NavItem';

const Navigation = () => (
  <Nav>
    <NavItem link="/" label="About Me" image=""/>
    <NavItem link="/blog" label="Blog" image=""/>
    <NavItem link="/side-projects" label="Side Projects" image=""/>
    <NavItem link="https://fionoble.shop" external label="Shop" image=""/>
  </Nav>
);

export default Navigation;
