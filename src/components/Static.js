import React from "react";
import { Link } from "react-router-dom";

const Static = (props) => {
  return (
    <div>
      <Link to="/">Back</Link>
      This is a Static Page
    </div>
  );
};

export default Static;
