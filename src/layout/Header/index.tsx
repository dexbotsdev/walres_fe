import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import "./style.scss"
 
const StyledHeader = styled(Layout.Header)`
position:sticky;
top:0;
padding-left:15rem; 
 `

const StyledMenu = styled(Menu)`
  background: transparent;
  line-height: 25px;
  border: none;
  padding-left:15rem;
 
`

const MenuItemStyled = styled(Menu.Item)`
  && {
    top: 4px;
    border-bottom: 4px solid transparent;
    color: #080808;
    &:hover {
      border-bottom: 4px solid transparent;
      & > a {
        color: #ffffff;
        opacity: 1;
      }
    }
  }
  &&.ant-menu-item-selected
  {
    color: #080808;
    border-bottom: 4px solid white;

    & > a {
      opacity: 1;
    }
  }
  && > a {
    color: #080808;
    opacity: 0.60;
    font-weight: bold;
    letter-spacing: 0.01em;
  }
`

const Header = () => {

    const location = useLocation();

return (
  <StyledHeader >
        <img src="/img/main-logo/logo.svg" alt="" width='150px' />
    
        <StyledMenu
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >
      <MenuItemStyled key="/">
        <Link to="/">Home</Link>
      </MenuItemStyled>
      <MenuItemStyled key="/dashboard">
        <Link to="/dashboard">Recover</Link>
      </MenuItemStyled>
      {/* <MenuItemStyled key="/toolBoard">
        <Link to="/toolBoard">ToolBoard</Link>
      </MenuItemStyled> */}
    </StyledMenu>
  </StyledHeader>
)}

export default Header;
