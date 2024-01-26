import React from "react";
import { Link } from "react-router-dom";

const LogoHome = (props) => {
  return (
    <Link to="/" className="d-flex flex-column align-items-center bord text-decoration-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="#666666"
        class="mercado-match"
        width="25"
        height="25"
        focusable="false"
      >
        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
      </svg>

      <p className="mercado-match">Home</p>
    </Link>
  );
};

export default LogoHome;