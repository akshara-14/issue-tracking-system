import "./Card.css";

function Card({ data }) {
  //   const title = "Heading";
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>{data.title}</h3>
      </div>
      <div className="card-body">
        <p>{data.description}</p>
      </div>
      <div className="btn">
        <button>View More</button>
      </div>
    </div>
  );
}

export default Card;
