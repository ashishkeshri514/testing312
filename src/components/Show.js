import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Show = (props) => {
  const { results, info } = props;

  return (
    <div className="searchresult">
      <div style={{ color: "silver", fontWeight: "normal", fontSize: "14px" }}>
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>

      {results.length > 0
        ? results.map((result, index) => (
            <div className="showdetails" key={index}>
              {/* {console.log({title:result.title,displayLink:result.displayLink,snippet:result.snippet})} */}
              <div className="showlink">{result.displayLink}</div>
              <Link to="./static">{result.title}</Link>
              <div>{result.snippet}</div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Show;
