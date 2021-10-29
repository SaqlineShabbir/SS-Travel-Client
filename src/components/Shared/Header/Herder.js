import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Header.css"
const Herder = () => {
  const {user,logOut} = useAuth()
    return (
        <div>
            <Navbar bg="dark" expand="lg">
  <Container >
    <Navbar.Brand className="text-white fw-bold" href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
        <Nav.Link as={Link} className="text-white fw-bold" to="/home">Home</Nav.Link>
        <Nav.Link as={Link} className="text-white fw-bold" to="/addTours">Add Tours</Nav.Link>
        <Nav.Link as={Link} className="text-white fw-bold" to="/link">Link</Nav.Link>
        <Nav.Link as={Link}className="text-white fw-bold" to="/link">Link</Nav.Link>
        
        { 
          user.email?
          <Link to="/signup">   <button onClick={logOut} className="signup-button ">Log Out</button></Link>
          :
        <Link to="/signup">   <button className="signup-button ">Sign Up</button></Link>
       }
       { user.email &&
           <div className="d-flex user">
           <img className="bg-white" src={user?.photoURL} alt="" />
           <p className="mt-1 ms-2 text-white">{user?.displayName}</p>
           </div>
       }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Herder;