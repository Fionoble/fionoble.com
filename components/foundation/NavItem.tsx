import {NavItem as StyledNavItem} from '../styles/NavigationStyles';
import Link from 'next/link';

const NavItem = (props) => {
  // const Link = props.external ? (p => <a {...p} tartget="_blank"/>) : NextLink;

  return (
    <Link href={props.link} passHref={props.external}>
      <StyledNavItem>
        <div className="nav-item-title">
          {props.label}
        </div>
      </StyledNavItem>
    </Link>
  )
};

export default NavItem;
