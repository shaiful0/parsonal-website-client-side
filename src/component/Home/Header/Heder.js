import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Heder = () => {
  const [user] = useAuthState(auth);
  const userSignOut = () =>{
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/home">Perfum House</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        <Nav.Link as={Link} to="about">About</Nav.Link>
        {
            user && <>
            <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
            <Nav.Link as={Link} to="additem">Add Items</Nav.Link>
            <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
            </>
          }
        {
          user?
          <button className='btn btn-link text-white text-decoration-none' onClick={userSignOut}>sign out</button>
          :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Heder;