export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="logo">
          IT&apos;S <span className="logo-highlight">COOL</span>TO DROOL
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#cakes">Our Cakes</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="place-order-btn">Place Order</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-heading">Sweeten Your Day with Our</p>
          <h1 className="hero-title">IRRESISTIBLE CAKES</h1>
          <p className="hero-description">Discover the most delicious, custom-made cakes for every occasion!</p>
          <button className="view-cakes-btn">View Cakes</button>
        </div>
        <div className="hero-images">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop"
            alt="Delicious decorated cakes display"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🥄</div>
          <h3 className="feature-title">Fresh Ingredients</h3>
          <p className="feature-description">We use only the finest, freshest ingredients in our cakes.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎂</div>
          <h3 className="feature-title">Custom Orders</h3>
          <p className="feature-description">Get your cake your way – perfectly personalized to your site.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3 className="feature-title">Reliable Service</h3>
          <p className="feature-description">Easy online ordering and timely, trustworthy delivery.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">IT&apos;S COOL TO DROOL</div>
          <p className="footer-text">© 2024 It&apos;s Cool to Drool. All rights reserved.</p>
        </div>
        <div className="footer-content">
          <p className="footer-text">Follow Us |</p>
          <ul className="social-links">
            <li><a href="#facebook" title="Facebook">f</a></li>
            <li><a href="#instagram" title="Instagram">📷</a></li>
            <li><a href="#twitter" title="Twitter">𝕏</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
