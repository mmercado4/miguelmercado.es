import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import "./Spinners.css";

const Spinners = () => {
  return (
    <Fragment>
      <main>
        <div className="spinner-container">
          <div className="first-spinner">
            <p>
              <FontAwesomeIcon icon={faGamepad} />
              Comming soon
              <span style={{ "--i": "0" }}>.</span>
              <span style={{ "--i": "1" }}>.</span>
              <span style={{ "--i": "2" }}>.</span>
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Spinners;
