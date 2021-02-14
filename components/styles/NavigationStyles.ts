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
  background-color: #3e3e3e;
  position: relative;
  flex: 1;
  list-style-type: none;

  .nav-item-title {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 24px;
    color: #cecece;
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
