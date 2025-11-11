import './AlorePage.css';

export default function AlorePage() {
  return (
    <div className="alore-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-main">
            Hands shape what hearts imagine. In their rhythm, light takes form, and becomes <span className="alore-text">Aloré.</span>
          </p>
        </div>
        <div className="hero-vogue">
          <p className="featured-label">Featured in</p>
          <div className="vogue-logo-container">
            <img src="/vogue.svg" alt="Vogue" className="vogue-logo" />
          </div>
          <p className="vogue-description">for redefining modern luxury in fine jewelry.</p>
        </div>
      </section>

      {/* Award Section */}
      <section className="award-section">
        <p className="award-text">
          Awarded <span className="bold-text">"Excellence in Fine Jewelry Design"</span> — Luxe Awards 2024
        </p>
      </section>

      {/* Featured Logos Section */}
      <section className="featured-section">
        <div className="featured-left">
          <p className="featured-label">Featured in</p>
          <div className="elle-content">
            <div className="elle-logo-container">
              <img src="/elle.svg" alt="Elle" className="elle-logo" />
            </div>
            <p className="logo-description">for timeless handcrafted minimalism</p>
          </div>
        </div>
        
        <div className="featured-right">
          <div className="achievements">
            <p className="trusted-text">
              Trusted by connoisseurs and collectors across 12 countries
            </p>
            <p className="achievement-item">Selected for the International Jewelry Heritage Exhibition 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
}