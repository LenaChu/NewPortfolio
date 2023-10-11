import Project from "./Project";
import "./ProjectSection.css";

export default function ProjectSecion() {
  return (
    <section className="project-section">
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
      />
      <Project
        company="TalentGuard"
        pills={["UX Design", "Product Management", "UI Design"]}
      />
    </section>
  );
}
