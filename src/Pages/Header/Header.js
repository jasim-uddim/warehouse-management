import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, error] = useAuthState(auth);
  const handleSignOut = () => {
    if (user) {
      signOut(auth);
    }
  };
  if (error) {
    return (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Grocery Stock
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#service">OWS</Nav.Link>
              <Nav.Link href="home#online">Online</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/addItems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manege">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItems">
                    My items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-link text-white text-decoration-none"
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
