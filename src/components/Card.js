import { Component } from "react";
import IssueDetail from "../pages/IssueDetail";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  let navigate = useNavigate();
  const routeChange = () => {
    const formValuesJson = { ...localStorage };
    // let issuekey = Object.keys(formValuesJson);
    for (var i = 0; i < localStorage.length; ++i) {
      const d = localStorage.getItem(localStorage.key(i));
      const data1 = JSON.parse(d);
      if (data.title == data1.title) {
        // console.log(data1.title);
        // console.log(localStorage.key(i));
        let path = `/issue-details/${localStorage.key(i)}`;
        const id = localStorage.key(i);
        navigate(path);
      }
    }
  };
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>{data.title}</h3>
      </div>
      <div className="card-body">
        <p>{data.description}</p>
      </div>
      <div className="btn">
        <button onClick={routeChange}>View More</button>
      </div>
    </div>
  );
}

export default Card;
