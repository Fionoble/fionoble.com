import NavItemStyles from './styles/NavItemStyles';

const NavItem = (props) => {


  return (
    <NavItemStyles>
      <div className="nav-item-title">
        {props.label}
      </div>
    </NavItemStyles>
  )
};

export default NavItem;
