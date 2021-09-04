import React, { useEffect, useState } from "react";
import { key } from "../API";
import { cx } from "../cx";
import axios from "axios";
import Show from "./Show";

const url = "https://searchapi514.herokuapp.com/"

const Home = (props) => {
  const [state, setState] = useState("");
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");

  /*axios
   .get(`/allsearch/${state}`)
        .get('api/profile/')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); */
  const searchGoogle = async (e) => {
    e.preventDefault();
    const resp = await axios({
      method: 'get',
      url: `${url}/allsearch/${state}`,
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
        setResults(JSON.parse(response.request.response).posts);
    })
    .catch(function (error) {
        // console.log(error);
    });
    // if (resp) {
    //         setResults(resp);
    // }
    // fetch(
    //   `/allsearch/${state}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // ).then(function (res) {
    //   console.log(res);
    // });
    // try {
    // const response = await axios
    //   .get(`/allsearch/${state}`)
    //   .then(function (res) {
    //     console.log(res);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   if (response) {
    //     console.log(response);
    //     // setResults(response.data.items);
    //     // setInfo(response.data.searchInformation);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    async function getResult() {
          const resp = await axios
          .get(`${url}/allsearch/${state}`)
          .then(function (response) {
              setResults(JSON.parse(response.request.response).posts);
          })
          .catch(function (error) {
              // console.log(error);
          });
    }
    if(state) getResult();
  }, [state]);
  return (
    <div>
      <div className="App">
        <h1>Search</h1>
        <form onSubmit={searchGoogle}>
          <input
            type="text"
            style={{ margin: "10px", padding: "1px 4px 1px 4px" }}
            onChange={(e) => {
              setState(e.target.value);
            }}
            value={state}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      {/* {console.log(results)} */}
      <Show results={results} info={info} />
    </div>
  );
};

export default Home;
