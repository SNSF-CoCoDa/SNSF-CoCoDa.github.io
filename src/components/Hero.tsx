import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img src="/cocoda-logo.png" alt="CoCoDa Logo" className="hero-logo" />
        <h2 className="hero-subtitle">Studying Systemic Risks on Online Platforms</h2>
        <p className="hero-description">
          Moving beyond computational methods without (legal) teeth, and legal solutions that are not implementable.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="hero-btn primary">About the Project</a>
          <a href="#team" className="hero-btn secondary">Our Team</a>
        </div>
      </div>
    </section>
  );
}
