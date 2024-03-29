import "./Homepage.css";
import { content } from "./consts";
import PageNav from "../../PageNav";
import newHomepage from "../../../images/Desktop-dark 2.png";
import oldHomepage from "../../../images/old-homepage.png";
import tgLogo from "../../../images/tg-logo.png";
import competitorGraph from "../../../images/graph.png";
import featureOne from "../../../images/Homepage/homepage_feature1.png";
import featureTwo from "../../../images/Homepage/homepage_feature2.png";
import featureThree from "../../../images/Homepage/homepage_feature3.png";

export default function Homepage() {
  const nextStepBullets = content.impacts.next.bullets;
  const listItems = nextStepBullets.map((bullet) => <li>{bullet}</li>);

  return (
    <main>
      <section className="sec project-title">
        <div className="project-intro__container p-mb_lg">
          <div className="project-intro__image">
            <img
              className="user-homepage-mockup"
              alt="Homepage in device mockup"
              src={newHomepage}
            ></img>
          </div>
          <div className="project-intro__content">
            <h1 className="t-mb_sm">{content.heroSection.title}</h1>
            <h4 className="t-mb_lg">{content.heroSection.statement}</h4>
            <p>{content.heroSection.description}</p>
          </div>
        </div>
        <div className="project-breakdown__container">
          <div className="project-breakdown__roles">
            <h4 className="t-mb_sm">My Roles</h4>
            <ul>
              {content.heroSection.breakdown.responsibilities.map(
                (role, index) => (
                  <li className="t-mb_sm" key={index}>
                    {role}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="project-breakdown__members">
            <h4 className="t-mb_sm">Team Members</h4>
            <ul>
              {content.heroSection.breakdown.members.map((member, index) => (
                <li className="t-mb_sm" key={index}>
                  {member}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-breakdown__audience">
            <h4 className="t-mb_sm">Target Audience</h4>
            <p>{content.heroSection.breakdown.targetAudience}</p>
          </div>
          <div className="project-breakdown__timeline">
            <h4 className="t-mb_sm">Timeline</h4>
            <p>{content.heroSection.breakdown.timeline}</p>
          </div>
          <div className="project-breakdown__delivery">
            <h4 className="t-mb_sm">Final Delivery</h4>
            <p>{content.heroSection.breakdown.delivery}</p>
          </div>
        </div>
      </section>
      <section className="sec client-intro">
        <div className="col-1">
          <div className="intro p-mb_lg">
            <h2 className="t-mb_lg">{content.client.title}</h2>
            <p>{content.client.description}</p>
          </div>
          <div className="primary-users p-mb_md">
            <h3 className="t-mb_md">Primary Users</h3>
            <p>{content.client.users.primary}</p>
          </div>
          <div className="secondary-users p-mb_md">
            <h3 className="t-mb_md">Secondary Users</h3>
            <p>{content.client.users.secondary}</p>
          </div>
        </div>
        <div className="col-2">
          <img className="tg-logo" alt="TalentGuard Logo" src={tgLogo}></img>
        </div>
      </section>
      <section className="sec problem-context">
        <div className="col-1">
          <h2 className="t-mb_md">A bare landing experience</h2>
          <p>
            TalentGuard’s talent platform aims to empower employees to foster
            their skills, identify space of development, and discover career
            opportunities. As the first touch point, the original homepage
            didn’t serve much to help users discover the functionalities and
            take actions.
          </p>
        </div>
        <div className="col-2">
          <img
            className="old-homepage"
            alt="TalentGuard Old Homepage"
            src={oldHomepage}
          ></img>
        </div>
      </section>
      <section className="sec problems">
        <div className="row-1 p-mb_md">
          <h3>On the users side,</h3>
          <div className="problem">
            <h1 className="display-3 italic txt-d-3 t-mb_sm">1</h1>
            <h2 className="txt-d-4 h-lh">{content.problems.first}</h2>
          </div>
          <div className="problem">
            <h1 className="display-3 italic txt-d-3 t-mb_sm">2</h1>
            <h2 className="txt-d-4 h-lh">{content.problems.second}</h2>
          </div>
        </div>
        <div className="row-2">
          <h3>On the business side,</h3>
          <div className="problem">
            <h1 className="display-3 italic txt-d-3 t-mb_sm">3</h1>
            <h2 className="txt-d-4 h-lh">{content.problems.third}</h2>
          </div>
          <div className="problem">
            <h1 className="display-3 italic txt-d-3 t-mb_sm">4</h1>
            <h2 className="txt-d-4 h-lh">{content.problems.forth}</h2>
          </div>
        </div>
      </section>
      <section className="sec hmw">
        <div className="wrapper">
          <h3 className="t-mb_lg">How might we...</h3>
          <h1 className="h-lh txt-d-4">{content.hmw.statement}</h1>
        </div>
      </section>
      <section className="sec kickoff">
        <div className="row-1">
          <div className="intro p-mb_lg">
            <h2 className="t-mb_lg">{content.kickoff.title}</h2>
            <p>{content.kickoff.description}</p>
          </div>
          <div className="wrapper">
            <div className="col-1 insights">
              <h3 className="t-mb_lg">Insights</h3>
              <div className="stakeholder-interviews p-mb_sm">
                <h4 className="t-mb_sm">Stakeholder Interviews</h4>
                <p>{content.kickoff.insights.stakeholderInterviews}</p>
              </div>
              <div className="survey">
                <h4 className="t-mb_sm">User Survey</h4>
                <p>{content.kickoff.insights.userSurvey}</p>
              </div>
            </div>
            <div className="col-2 arrows">
              <div className="arrow-container">
                <img className="arrow" alt="arrow icon"></img>
              </div>
              <div className="arrow-container">
                <img className="arrow" alt="arrow icon"></img>
              </div>
            </div>
            <div className="col-3 decisions">
              <h3 className="t-mb_lg">Decisions</h3>
              <div className="expectations p-mb_sm">
                <h4 className="t-mb_sm">Set up a reasonable expectation.</h4>
                <p>{content.kickoff.decisions.expectations}</p>
              </div>
              <div className="step">
                <h4 className="t-mb_sm">Smaller step, higher impact</h4>
                <p>{content.kickoff.decisions.step}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="intro p-mb_lg">
            <h3 className="t-mb_lg">{content.kickoff.competitors.title}</h3>
            <p>{content.kickoff.competitors.description}</p>
          </div>
          <div className="wrapper">
            <div className="col-1 workforce-mgt">
              <h3 className="t-mb_md">Workforce Management</h3>
              <p>{content.kickoff.competitors.categories.management}</p>
            </div>
            <div className="col-2 competitor-graph_container">
              <img
                className="competitor-graph"
                alt="Competitors Aalysis"
                src={competitorGraph}
              ></img>
            </div>
            <div className="col-3 workforce-dev">
              <h3 className="t-mb_md">Workforce Management</h3>
              <p>{content.kickoff.competitors.categories.management}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec solutions">
        <div className="wrapper">
          <h3 className="t-mb_lg">The homepage should...</h3>
          <div className="solutions-container">
            <div className="solution">
              <div className="solution-title t-mb_lg">
                <h1 className="display-1 italic txt-d-3">1</h1>
                <h3>Provide</h3>
              </div>
              <h2 className="h-lg txt-d-4">{content.solutions.first}</h2>
            </div>
            <div className="solution">
              <div className="solution-title t-mb_lg">
                <h1 className="display-1 italic txt-d-3">2</h1>
                <h3>Promote</h3>
              </div>
              <h2 className="h-lg txt-d-4">{content.solutions.second}</h2>
            </div>
            <div className="solution">
              <div className="solution-title t-mb_lg">
                <h1 className="display-1 italic txt-d-3">3</h1>
                <h3>Has</h3>
              </div>
              <h2 className="h-lg txt-d-4">{content.solutions.third}</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="sec feature-1">
        <div className="intro">
          <h3 className="t-mb_md">Feature #1</h3>
          <h2 className="txt-d-4">Welcome Section</h2>
        </div>
        <div className="highlight-1 p-mb_lg">
          <h3 className="t-mb_md">{content.feature1.highlight1.title}</h3>
          <p>{content.feature1.highlight1.description}</p>
        </div>
        <div className="highlight-2">
          <h3 className="t-mb_md">{content.feature1.highlight2.title}</h3>
          <p>{content.feature1.highlight2.description}</p>
        </div>
        <img
          className="feature-img welcome-section"
          alt="Feature #1 Welcome Section"
          src={featureOne}
        ></img>
      </section>
      <section class="sec feature-2">
        <div className="intro">
          <h3 className="t-mb_md">Feature #2</h3>
          <h2 className="txt-d-4">{content.feature2.title}</h2>
        </div>
        <div className="highlight-1 p-mb_lg">
          <h3 className="t-mb_md">{content.feature2.highlight1.title}</h3>
          <p>{content.feature2.highlight1.description}</p>
        </div>
        <div className="highlight-2">
          <h3 className="t-mb_md">{content.feature2.highlight2.title}</h3>
          <p>{content.feature2.highlight2.description}</p>
        </div>
        <img
          className="feature-img module-status"
          alt="Feature #2 Module Status + Call to Actions"
          src={featureTwo}
        ></img>
      </section>
      <section class="sec feature-3">
        <div className="intro">
          <h3 className="t-mb_md">Feature #3</h3>
          <h2 className="txt-d-4">Content and Layout Customization</h2>
        </div>
        <div className="highlight-1 p-mb_lg">
          <h3 className="t-mb_md">{content.feature3.highlight1.title}</h3>
          <p>{content.feature3.highlight1.description}</p>
        </div>
        <div className="highlight-2">
          <h3 className="t-mb_md">{content.feature3.highlight2.title}</h3>
          <p>{content.feature3.highlight2.description}</p>
        </div>
        <img
          className="feature-img customization-panel"
          alt="Feature #3 Customization Panel"
          src={featureThree}
        ></img>
      </section>
      <section className="sec impacts_next">
        <div className="intro">
          <h2 className="t-mb_lg">Impacts</h2>
          <p className="p-mb_lg">{content.impacts.description}</p>
          <h3 className="t-mb_md">{content.impacts.next.title}</h3>
          <ol>{listItems}</ol>
        </div>
      </section>
      <PageNav />
    </main>
  );
}
