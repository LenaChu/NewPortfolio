import Project from "./Project";
import "./ProjectSection.css";

export default function ProjectSecion() {
  return (
    <section className="project-section">
      <Project
        company="TalentGuard"
        pills={["UX Design", "UX Research", "UI Design"]}
        title="User Homepage"
        path="/userhomepage"
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
        title="Notification Center"
        path="/notification"
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
        title="Typography"
        path="/typography"
      />
    </section>
  );
}
