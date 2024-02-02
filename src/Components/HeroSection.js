import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img alt="A floating girl"></img>
      </div>
      <div className="hero-statement">
        <div className="display-title">Hi! Welcome to my place. 👋</div>
        <p>
          A UX designer by day, and an aspiring Salsa dancer at night!
          <span>&#128131;</span>
        </p>
      </div>
    </section>
  );
}
