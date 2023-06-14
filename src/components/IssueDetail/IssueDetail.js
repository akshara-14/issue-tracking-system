import "./IssueDetail.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const IssueDetail = () => {
  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem(id));
  // console.log(data);
  const Delete = () => {
    localStorage.removeItem(id);
    let path = `/issues`;
    navigate(path);
  };
  return (
    <div className="container">
      <div className="card-title">
        <h1>{data.title}</h1>
      </div>
      <div className="card-body">
        <p>
          Type : <b>{data.type}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Status :<b> {data.status}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Priority : <b>{data.priority}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Resolution : <b>{data.resolution}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Affected Versions : <b>{data.affectedversions}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Fix Version : <b>{data.fixversion}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Components : <b>{data.components}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Assignee : <b>{data.assignee}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Labels : <b>{data.labels}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Reporter : <b>{data.reporter}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Sprint : <b>{data.sprint}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Description : <b>{data.description}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Story Points : <b>{data.storypoints}</b>
        </p>
      </div>
      <div className="card-body">
        <p>
          Attachment : <b>{data.attachment}</b>
        </p>
      </div>
      <div className="btn">
        <button onClick={Delete}>Delete Issue</button>
      </div>
    </div>
  );
};

export default IssueDetail;
