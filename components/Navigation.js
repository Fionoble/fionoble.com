import NavigationStyles from './styles/NavigationStyles';
import NavItem from './NavItem';

const Navigation = () => (
  <NavigationStyles>
    <NavItem link="/" label="Home" image=""/>
    <NavItem link="https://fionoble.com/blog" label="Blog" image=""/>
    <NavItem link="/about" label="About" image=""/>
    <NavItem link="https://fionoble.shop" label="Shop" image=""/>
  </NavigationStyles>
);
 export default Navigation;
