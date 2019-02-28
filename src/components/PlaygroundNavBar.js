import React from "react";
import { NavLink as NavLinkRouterDOM } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function PlaygroundNavBar() {
  return (
    <div>
      <p>Playground</p>
      <Nav vertical>
        <NavItem>
          <NavLink tag={NavLinkRouterDOM} to="/playground/popup-form">
            Popup Form
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Example 2</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Others</p>
      <Nav vertical>
        <NavLink href="#">Link 1</NavLink>
        <NavLink href="#">Link 2</NavLink> <NavLink href="#">Link 3</NavLink>{" "}
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
    </div>
  );
}
