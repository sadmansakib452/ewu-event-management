import React from "react";
import "./SearchEvent.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
const SearchEvent = () => {
  return (
    <div>
      <div className="custom-container d-flex justify-content-center align-items-center">
        <div className="SearchEvent ">
          <h1 className="mb-4 text-center">Your Event, Your Way</h1>
          <form className="d-flex">
            <Form.Select className="me-1" aria-label="Default select example">
              <option>Select Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Select className="me-1" aria-label="Default select example">
              <option>Select Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button className="btn btn-secondary" type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchEvent;
