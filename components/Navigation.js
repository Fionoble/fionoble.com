import NavigationStyles from './styles/NavigationStyles';
import NavItem from './NavItem';

const Navigation = () => (
  <NavigationStyles>
    <NavItem link="/" label="Home" image=""/>
    <NavItem link="https://fionoble.com/blog" external label="Blog" image=""/>
    <NavItem link="/about" label="About" image=""/>
    <NavItem link="https://fionoble.shop" external label="Shop" image=""/>
  </NavigationStyles>
);
 export default Navigation;
