import "./Homepage.css";
import { content } from "./consts";

export default function Homepage() {
  return (
    <main>
      <section className="sec project-title">
        <h1 className="display-4">{content.heroSection.title}</h1>
        <h5>{content.heroSection.statement}</h5>
        <img className="bg-image 1" alt="user homepage mockup"></img>
        <img className="bg-image 2" alt="user homepage mockup"></img>
      </section>
      <section className="sec client-intro">
        <div className="col-1">
          <div className="intro">
            <h2>{content.client.title}</h2>
            <p>{content.client.description}</p>
          </div>
          <div className="primary-users">
            <h3>Primary Users</h3>
            <p>{content.client.users.primary}</p>
          </div>
          <div className="secondary-users">
            <h3>Secondary Users</h3>
            <p>{content.client.users.secondary}</p>
          </div>
        </div>
        <div className="col-2">
          <img className="tg-logo" alt="TalentGuard Logo"></img>
        </div>
      </section>
      <section className="sec project-overview">
        <div className="col-1">
          <div className="intro">
            <h2>{content.overview.title}</h2>
            <p>{content.overview.description}</p>
          </div>
          <div className="breakdown">
            <div className="responsibilities">
              <h3>My Responsibilities</h3>
              <p>{content.overview.breakdown.responsibilities}</p>
            </div>
            <div className="challenges">
              <h3>Challenges</h3>
              <p>{content.overview.breakdown.challenges}</p>
            </div>
            <div className="members">
              <h3>Team Members</h3>
              <p>{content.overview.breakdown.members}</p>
            </div>
            <div className="delivery">
              <h3>Final Delivery</h3>
              <p>{content.overview.breakdown.delivery}</p>
            </div>
            <div className="timeline">
              <h3>Timeline</h3>
              <p>{content.overview.breakdown.timeline}</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <img className="old-homepage" alt="TalentGuard Old Homepage"></img>
        </div>
      </section>
    </main>
  );
}
