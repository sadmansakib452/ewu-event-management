import React from "react";
import "./UserForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserForm = (props) => {
  const user = props.user;
  return (
    <div className="main-body d-flex flex-column align-items-center mt-5">
      <div className="form-container">
        <h2 className="text-center">
          Register <br />
          As
          <br />
          {user}
        </h2>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          {user === "volunteer" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student ID</Form.Label>
              <Form.Control type="text" placeholder="Ex. 2000-1-11-111" />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="password" placeholder="Enter contact number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          {user === "volunteer" || user === "staff" ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What you do best</Form.Label>
              <Form.Control type="text" placeholder="Enter your message" />
            </Form.Group>
          ) : (
            ""
          )}

          <div className="d-flex justify-content-center mt-5">
            <Button className="w-100 fs-5" variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
