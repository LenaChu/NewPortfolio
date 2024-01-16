import "./Homepage.css";
import { content } from "./consts";

export default function Homepage() {
  return (
    <main>
      <div className="project-title">
        <h1 className="display-4">{content.heroSection.title}</h1>
        <h5>{content.heroSection.statement}</h5>
        <img className="bg-image 1" alt="user homepage mockup"></img>
        <img className="bg-image 2" alt="user homepage mockup"></img>
      </div>
      <div className="client-intro">
        <div className="col-1">
          <div className="intro">
            <h2>{content.client.title}</h2>
            <p>{content.client.description}</p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <h1>{content.overview.title}</h1>
      <p>{content.overview.description}</p>
      <p>{content.overview.timeline}</p>
      <ul>
        <li>{content.kickoff.list.bullet1}</li>
        <li>{content.kickoff.list.bullet2}</li>
      </ul>
    </main>
  );
}
