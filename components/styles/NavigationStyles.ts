import styled from 'styled-components';

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  list-style-type: none;
  height: 200px;
`;

const NavItem = styled.li`
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

const NavContainer = styled.div`
  overflow: hidden;
  padding: 90px 10px;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;

export {Navigation, NavItem, NavContainer};
