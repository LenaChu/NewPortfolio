import "./Project.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  const pills = props.pills.map(function (pill) {
    return <span className="pill">{pill}</span>;
  });
  return (
    <div className="project-container">
      <Link to={props.path}>
        <div className="project-image"></div>
      </Link>
      <p>Company: {props.company}</p>
      <div className="pills-container">{pills}</div>
    </div>
  );
}
