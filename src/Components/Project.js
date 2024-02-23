import "./Project.css";
import Button from "./Button";

export default function Project(props) {
  const pills = props.pills.map(function (pill) {
    return <span className="pill">{pill}</span>;
  });
  return (
    <div className="project-container">
      <div className="project-image">
        <img className="device-mockup" alt="Design Mockup"></img>
      </div>
      <div className="project-brief">
        <h2 className="t-mb_md">{props.title}</h2>
        <p className="p-mb_md project-intro">{props.intro}</p>
        <div className="project-info">
          <div className="project-company t-mb_sm">
            <h3>Company</h3>
            <p>{props.company}</p>
          </div>
          <div className="project-timeline">
            <h3>Timeline</h3>
            <p>{props.timeline}</p>
          </div>
        </div>
        <div className="pills-container p-mb_lg">{pills}</div>
        <Button path={props.path} text="View Project"></Button>
      </div>
    </div>
  );
}
