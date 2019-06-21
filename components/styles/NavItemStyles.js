import styled from 'styled-components';

const NavStyles = styled.li`
  margin: 0 10px 0 0;
  padding: 0;
  height: 460px;
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

export default NavStyles;
