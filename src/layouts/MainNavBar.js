import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function MainNavBar() {
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Codetotti</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/playground/">Playground</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/codetotti">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
