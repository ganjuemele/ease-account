import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const NavDiv = styled.nav`
  line-height: 24px;
  background-color:white;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333333%;
      text-align: center;
      a {
          padding: 8px;
          display:flex;
          flex-direction:column;
          align-items:center;
          color:#666;
          .icon {
            width:24px;
            height:24px;
          }
          &.selected {
              color: #9f6f3f;
              font-weight:550;
              .icon {
                  fill:red;
              }
          }
      }
    }
  }
`
const Nav = () => {
    return (
        <NavDiv>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName='selected'>
                        <Icon name='strawberry'/>标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName='selected'>
                        <Icon name='pear'/>记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName='selected'>
                        <Icon name='watermelon'/>统计
                    </NavLink>
                </li>
            </ul>
        </NavDiv>
    )
}

export default Nav;
