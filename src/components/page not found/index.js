import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="ct_page_not_found_bg">
      <div className="ct_page_not_found_section">
        <h1 className="ct_page_not_found_error">404</h1>
        <div className="ct_page_not_found_page">
          Ooops!!! The page you are looking for is not found
        </div>
        <a
          className="back-home"
          href="javascript:void(0)"
          onClick={() => navigate(-1)}
        >
          Back to previous
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
