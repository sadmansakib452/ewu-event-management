import { React, useContext, useEffect} from "react";
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

import logo from "../../../images/logo.svg";

import "./Header.css";
//Google Authentication import

import {handleSignOut} from "../../Authentication/Firebase/GoogleAtuh/GoogleAuth";
import {loadEvents, loadUsers, loadSuppliers} from '../../Dashboard/UploadImage'
import {LoadUserEvent} from '../../Events/EventFunctionalities'

const Header = () => {
  const [loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData, 
    setGetAllSupplierData,
    getAllUserEvent, 
    setAllUserEvent] = useContext(UserContext);

  console.log(loggedInUser);

  //--------------------Load Database------------------------------
  const LoadDatabase = () =>{

    useEffect(()=>{

      loadEvents().then((events)=>{
        console.log('All events, from header',events);
        setGetAllEventData(events)
      })
      loadUsers().then((users)=>{
        setGetAllUserData(users);
        console.log('users from dashboard',users);
      })
      loadSuppliers().then((suppliers)=>{
        console.log('from dashboard supplier', suppliers)
        setGetAllSupplierData(suppliers)
        console.log('users from dashboard',suppliers);
      });
      LoadUserEvent(loggedInUser._id).then((userEvents)=>{
      
        setAllUserEvent(userEvents)
        console.log('from dashboard all user Event', getAllUserEvent)
      });
     
    },[])

  }

  loggedInUser.isSignedIn && LoadDatabase();
  //--------------------Load Database End--------------------------


  // --------------------Sign Out------------------------------------

  const SignOut = () =>{
    handleSignOut()
    .then();
  }
  
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

              <Nav.Link as={Link} to="/events" className="me-3 fs-5 fw-semibold">
                Events
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
              
              

              
             

              
            </Nav>

            <div className="d-flex flex-column">
              <div className="ms-auto d-flex">
                {loggedInUser.isSignedIn &&  (
                  <NavDropdown
                    title={loggedInUser.name || loggedInUser.firstName + ' ' + loggedInUser.lastName}
                    id="basic-nav-dropdown"
                    className="mb-5 me-2 fw-semibold fs-5"
                  >
                    <NavDropdown.Item as={Link} to="/dashboard/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link}
                    to="/dashboard">
                      Dashboard
                    </NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={SignOut}>
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
