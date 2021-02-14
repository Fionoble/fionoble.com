import {NavItem as StyledNavItem} from '../styles/NavigationStyles';
import NextLink from 'next/link';

const NavItem = (props) => {
  const Link = props.external ? (p => <a {...p} tartget="_blank"/>) : NextLink;

  return (
    <StyledNavItem>
      <Link href={props.link}>
        <div className="nav-item-title">
          {props.label}
        </div>
      </Link>
    </StyledNavItem>
  )
};

export default NavItem;
