import Project from "./Project";
import "./ProjectSection.css";
import { projects } from "./projects";

export default function ProjectSecion() {
  return (
    <section className="project-section">
      <Project
        title={projects.userHomepage.title}
        intro={projects.userHomepage.intro}
        company={projects.userHomepage.company}
        timeline={projects.userHomepage.timeline}
        pills={projects.userHomepage.pills}
        path={projects.userHomepage.path}
      />
    </section>
  );
}
