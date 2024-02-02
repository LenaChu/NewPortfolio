import Project from "./Project";
import "./ProjectSection.css";
import { paths } from "../paths";

export default function ProjectSecion() {
  return (
    <section className="project-section">
      <Project
        company="TalentGuard"
        pills={["UX Design", "UX Research", "UI Design", "Product Management"]}
        title="User Homepage"
        path={paths.userHomepage}
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
        title="Notification Center"
        path={paths.notification}
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Design System"]}
        title="Typography"
        path={paths.typography}
      />
    </section>
  );
}
