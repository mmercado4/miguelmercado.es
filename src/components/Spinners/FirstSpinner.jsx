import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const FirstSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="first-spinner">
        <p>
          <FontAwesomeIcon icon={faGamepad} />
          Loading<span style={{ "--i": "0" }}>.</span>
          <span style={{ "--i": "1" }}>.</span>
          <span style={{ "--i": "2" }}>.</span>
        </p>
      </div>
    </div>
  );
};

export default FirstSpinner;
