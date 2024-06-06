import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #282c34;
  padding: 1em;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 1em;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
