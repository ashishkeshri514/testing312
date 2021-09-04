import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = (props) => {
  const { results, info } = props;
  const apiCall = (id)=>{
     axios.get(`/search/${id}`)
        .then(function (response) {
            // console.log("s");
        })
        .catch(function (error) {
            // console.log(error);
        });
  }

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
              <Link to="./static" onClick={() => apiCall(result._id)}>{result.title} </Link>
              <div>{result.snippet}</div>
              <div style={{color:"grey"}}>This page has been visited: {result.count} times</div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Show;
