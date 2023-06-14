import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  let navigate = useNavigate();

  // routing of cards to their respective details page
  const routeChange = () => {
    for (var i = 0; i < localStorage.length; ++i) {
      const d = localStorage.getItem(localStorage.key(i));
      const data1 = JSON.parse(d);
      if (data.title === data1.title) {
        let path = `/issue-details/${localStorage.key(i)}`;
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
