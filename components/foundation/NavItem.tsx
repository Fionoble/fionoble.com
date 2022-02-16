import styled from 'styled-components';
import Link from 'next/link';

const StyledNavItem = styled.li`
  margin: 0 10px 0 0;
  padding: 0;
  height: 200px;
  background-color: #fff;
  position: relative;
  flex: 1;
  list-style-type: none;
  border: 3px black solid;
  border-top: 0px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.2);
  cursor: pointer;

  .nav-item-title {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 24px;
    color: #000;
  }

  &:hover {
    height: 230px;
    transition: height 0.1s ease-out;
  }
`;

const NavItem = (props) => {
  // TODO - Make an onclick and programmatically send them to the external links
  if(props.external) return (
    <StyledNavItem>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="nav-item-title">
          {props.label}
        </div>
      </a>
    </StyledNavItem>
  );
 

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
