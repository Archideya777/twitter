import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

function Error() {
  const back = useNavigate();

  return (
    <div>
      <div className="error">
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center row">
            <div className=" ">
              <p className="fs-3">
                {" "}
                <span className="text-danger">Wrong login or password! </span>
                Please try again!
              </p>
              <a href="#" className="btn btn-primary" onClick={() => back("/")}>
                Go back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
