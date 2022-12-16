import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container mt-4 d-flex justify-content-between">
      <h2 className="mt-4 ms-4">
        East West
        <br />
        University Event <br />
        Management
      </h2>
      <h3 className="align-self-end mb-4 me-4">
        Make your event picture
        <br />
        Perfect
      </h3>
    </div>
  );
};

export default Banner;
