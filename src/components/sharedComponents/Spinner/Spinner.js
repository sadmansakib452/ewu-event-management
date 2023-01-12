import React from "react";
import {FidgetSpinner} from "react-loader-spinner";
import './Spinner.css'
const Spinner = () => {
  return (
   <div className="Spinner-container d-flex justify-content-center align-items-center">
      <FidgetSpinner
      className="align-self-center"
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Spinner;
