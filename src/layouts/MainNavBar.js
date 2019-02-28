import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import { NavLink as NavLinkRouterDOM } from "react-router-dom";
import { NavLink } from "reactstrap";

export default function MainNavBar() {
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Codetotti</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={NavLinkRouterDOM} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NavLinkRouterDOM} to="/playground">
                Playground
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NavLinkRouterDOM} to="/blog/">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={NavLinkRouterDOM} to="https://github.com/codetotti">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
