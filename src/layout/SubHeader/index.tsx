import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import "./style.scss"
import logo from '../../assets/DexSmart.png'

const StyledHeader = styled(Layout.Header)`
position:sticky;
top:0;
background-color:white;
height:30px;
box-shadow: 0 5px 10px rgba(151,164,175,.05);
padding-left:4rem;
justify-content:space-between;
 `

const StyledMenu = styled(Menu)`
  background: transparent;
  line-height: 25px;
  border: none;
  padding-left:10rem;
  width:100%;
  
`

const MenuItemStyled = styled(Menu.Item)`
  && {
    top: 4px;
    border-bottom: 4px solid transparent;
    color: #001529;
    &:hover {
      border-bottom: 4px solid transparent;
      & > a {
        color: #000000;
        opacity: 1;
      }
    }
  }
  &&.ant-menu-item-selected
  {
    color: #000000;
    border-bottom: 4px solid white;

    & > a {
      opacity: 1;
    }
  }
  && > a {
    color: #ffffff;
    opacity: 0.60;
    font-weight: bold;
    letter-spacing: 0.01em;
  }
`

const SubHeader = () => {

    const location = useLocation();

return (
  <StyledHeader className="subheader">
    
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
    <StyledMenu
      mode="horizontal" 
    >  
    </StyledMenu>
  </StyledHeader>
)}

export default SubHeader;
