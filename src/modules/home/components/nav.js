import React, { Component } from "react";
import "./nav.scss";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Metamask from '../../../metamask'
const Nav = () => {



  return (<div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>

            <Metamask />

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>);
}


export default Nav;