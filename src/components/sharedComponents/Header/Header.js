import React from "react";
import { Link, redirect } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import { FaSearch } from "react-icons/fa";

import logo from "../../../images/logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <div >
      <Navbar expand="lg"className="">
        <Container fluid>
          

          <Navbar.Brand as={Link} to="/" className="h-50 fw-semibold fs-5">
            <div className="d-flex align-items-center">
            <Image src={logo} fluid></Image>
            <div>East West University Event <br /> Management</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="" />
          {/*  */}
          <Navbar.Collapse id="">
            <Nav
              className=" my-2 my-lg-0 ms-auto align-self-end"
              style={{ maxHeight: "280px" }}
              
            >
              <Nav.Link as={Link} to="/home" className="me-3 fs-5 fw-semibold">Home</Nav.Link>

              <Nav.Link as={Link} to="/venue" className="me-3 fs-5 fw-semibold">
                Venue
              </Nav.Link>
              <Nav.Link as={Link} to="/suppliers" className="me-3 fs-5 fw-semibold">
                Suppliers
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="me-3 fs-5 fw-semibold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Media" className="me-3 fs-5 fw-semibold">
                Media
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs" className="me-3 fs-5 fw-semibold">
                Contact Us
              </Nav.Link>
            </Nav>

            <div className="d-flex flex-column">
              <div className="ms-auto d-flex">
                <NavDropdown
                  className="mb-5 me-5 fw-semibold fs-5"
                  title="LOGIN"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item as={Link} to="/signIn/admin" className="fs-5">
                    Admin
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signIn/staff" className="fs-5">
                    Staff Member
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/signIn/volunteer" className="fs-5">
                    Volunteer
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Button as={Link} to="/signUp" className="h-50 fw-semibold fs-5" variant="secondary">
                  SIGNUP
                </Button> */}
                <NavDropdown
                  className="mb-5 me-5 fw-semibold fs-5"
                  title="SIGN UP"
                  id="navbarScrollingDropdown"
                  
                >
                  <NavDropdown.Item as={Link} to="/signUp/admin" className="fs-5">
                    Admin
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signUp/staff" className="fs-5">
                    Staff Member
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/signUp/volunteer" className="fs-5">
                    Volunteer
                  </NavDropdown.Item>
                </NavDropdown>
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
