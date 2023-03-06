import React, { Component } from "react";
import "./nav.scss";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Metamask from '../../../metamask'
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
const Nav = () => {



  return (<>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Link to="/" className="navbar-brand"><img src={logo} alt="Image" /></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Metamask />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>);
}


export default Nav;