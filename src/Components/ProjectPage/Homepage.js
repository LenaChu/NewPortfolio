import "./Homepage.css";
import { content } from "./consts";

export default function Homepage() {
  return (
    <main>
      <div className="project-title"></div>
      <h1>{content.overview.title}</h1>
      <p>{content.overview.description}</p>
      <p>{content.overview.timeline}</p>
    </main>
  );
}
