import React from "react";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Play for a Greener Planet</h1>
        <p>Join millions of players making a real environmental impact through gaming.</p>
        <div className="hero-buttons">
          <button className="start-btn">Start Playing</button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p className="mission-text">
          We believe gaming can be a powerful force for environmental change.
          Every game, every action, every player contributes to a sustainable future.
        </p>
        <div className="mission-cards">
          <div className="card">
            <h3>🌱 Environmental Impact</h3>
            <p>Transform virtual achievements into real-world eco actions like tree planting and waste reduction.</p>
          </div>
          <div className="card">
            <h3>🎮 Engaging Gameplay</h3>
            <p>Fun, story-driven games that teach sustainability while keeping you entertained.</p>
          </div>
          <div className="card">
            <h3>🌍 Global Community</h3>
            <p>Connect with players worldwide who care about saving the planet.</p>
          </div>
        </div>
      </section>

      {/* Varahan Teaser */}
      <section className="varahan-preview">
        <h2>Earn Varahan Coins</h2>
        <p>
          Play, achieve, and contribute to environmental goals to earn Varahan — 
          our in-game currency with real-world potential.
        </p>
        <button className="learn-btn">Learn More</button>
      </section>

      {/* Impact Stats Section */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>2.5M+</h3>
            <p>Tons of Waste Diverted</p>
          </div>
          <div className="stat">
            <h3>15K+</h3>
            <p>Trees Planted</p>
          </div>
          <div className="stat">
            <h3>890K+</h3>
            <p>CO2 Tons Reduced</p>
          </div>
          <div className="stat">
            <h3>150+</h3>
            <p>Partner Organizations</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Join Our Mission</h2>
        <p>Be part of the change. Get updates, early access to games, and join events.</p>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

    </div>
  );
}

export default Home;
