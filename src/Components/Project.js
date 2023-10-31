import "./Project.css";

export default function Project(props) {
  const pills = props.pills.map(function (pill) {
    return <span className="pill">{pill}</span>;
  });
  return (
    <div className="project-container">
      <div className="project-image">
        <h2 className="project-title">{props.title}</h2>
      </div>
      <p>Company: {props.company}</p>
      <div className="pills-container">{pills}</div>
    </div>
  );
}
