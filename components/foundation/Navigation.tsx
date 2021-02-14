import {Navigation as Nav} from '../styles/NavigationStyles';
import NavItem from './NavItem';

const Navigation = () => (
  <Nav>
    <NavItem link="/" label="Home" image=""/>
    <NavItem link="/blog" label="Blog" image=""/>
    <NavItem link="/about" label="About" image=""/>
    <NavItem link="https://fionoble.shop" external label="Shop" image=""/>
  </Nav>
);

export default Navigation;
