import NavItemStyles from './styles/NavItemStyles';
import NextLink from 'next/link';

const NavItem = (props) => {
  const Link = props.external ? (p => <a {...p}/>) : NextLink;

  return (
    <NavItemStyles>
      <Link href={props.link}>
        <div className="nav-item-title">
          {props.label}
        </div>
      </Link>
    </NavItemStyles>
  )
};

export default NavItem;
