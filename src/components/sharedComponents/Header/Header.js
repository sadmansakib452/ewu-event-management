import { React, useContext } from "react";
import { Link} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { UserContext } from "../../../App";
import { FaSearch } from "react-icons/fa";
import firebaseConfig from "../../Authentication/Firebase/firebaseConfig";
import logo from "../../../images/logo.svg";
import "./Header.css";
//Google Authentication import
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(loggedInUser);

  // --------------------Sign Out------------------------------------
  const auth = getAuth(app);
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setLoggedInUser(signedOutUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // --------------------Sign Out end------------------------------------
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="h-50 fw-semibold fs-5">
            <div className="d-flex align-items-center">
              <Image src={logo} fluid></Image>
              <div>
                East West University Event <br /> Management
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="" />
          {/*  */}
          <Navbar.Collapse id="">
            <Nav
              className=" my-2 my-lg-0 ms-auto align-self-end"
              style={{ maxHeight: "280px" }}
            >
              <Nav.Link as={Link} to="/" className="me-3 fs-5 fw-semibold">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/venue" className="me-3 fs-5 fw-semibold">
                Venue
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/suppliers"
                className="me-3 fs-5 fw-semibold"
              >
                Suppliers
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="me-3 fs-5 fw-semibold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Media" className="me-3 fs-5 fw-semibold">
                Media
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/budget"
                className="me-3 fs-5 fw-semibold"
              >
                Budget
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contactUs"
                className="me-3 fs-5 fw-semibold"
              >
                Contact Us
              </Nav.Link>
             

              <Nav.Link as={Link} to="/test" className="me-3 fs-5 fw-semibold">
                Test
              </Nav.Link>
            </Nav>

            <div className="d-flex flex-column">
              <div className="ms-auto d-flex">
                {loggedInUser.isSignedIn &&  (
                  <NavDropdown
                    title={loggedInUser.name || loggedInUser.email}
                    id="basic-nav-dropdown"
                    className="mb-5 me-2 fw-semibold fs-5"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link}
                    to="/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                {loggedInUser.isSignedIn ? '' : (
                  <Button
                    as={Link}
                    to="/signIn"
                    className="mb-5 me-2 fw-semibold fs-5"
                    variant="secondary"
                    onClick={() => handleSignOut}
                  >
                    SIGN IN
                  </Button>
                )}

                {!loggedInUser.isSignedIn ? (
                  <Button
                    as={Link}
                    to="/signUp"
                    className="mb-5 me-5 fw-semibold fs-5"
                    variant="secondary"
                  >
                    SIGN UP
                  </Button>
                ) : (
                  ""
                )}
              </div>

              <div>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">
                    {" "}
                    <FaSearch />
                  </Button>
                </Form>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
