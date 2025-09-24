import React from "react";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import varahan from "../assets/images/coin.png"

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Play Towards A Greener Planet</h1>
        <p>Join us in making a real environmental impact through gaming.</p>
        <div className="hero-btn">
          <button className="start-btn">Start Playing</button>
        </div>
      </section>

      {/* Latest News Section */}
<section className="latest-news">
  <div className="news-header">
    <h2>The Latest</h2>
    <a href="/EcoPlayStudios/news" className="news-link">Go To News Page →</a>
  </div>

  <div className="news-grid">
    {/* News 1 */}
    <div className="news-card">
      <img src={news1} alt="RecycleRush Launch" />
      <div className="news-content">
        <span className="news-tag">GAME RELEASE</span> | <span>9/24/2025</span>
        <h3>RecycleRush v1.0 Officially Launched</h3>
        <p>
          Our flagship eco-gaming experience is here! Start sorting waste, earn rewards, 
          and join the movement to turn play into real-world environmental impact.
        </p>
      </div>
    </div>

    {/* News 2 */}
    <div className="news-card">
      <img src={news2} alt="Upcoming Games" />
      <div className="news-content">
        <span className="news-tag">UPCOMING</span> | <span>Coming Soon</span>
        <h3>Rooftop Farming & Kitchen Garden</h3>
        <p>
          Two new eco-games are in the works! one brings rooftop farming to life, 
          while Kitchen Garden explores kitchen farming in a fun, interactive way.
        </p>
      </div>
    </div>

    {/* News 3 */}
    <div className="news-card">
      <img src={news3} alt="Varahan Update" />
      <div className="news-content">
        <span className="news-tag">COMMUNITY</span> | <span>9/18/2025</span>
        <h3>Varahan (VR Coin) Community Update</h3>
        <p>
          Varahan is evolving! More ways to earn, collect, and showcase your VR Coins are 
          on the horizon, giving our players a glimpse into a connected eco-reward future.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p className="mission-text">
          At Eco Play Studios, we believe gaming can be more than just fun — it can
          spark real-world change. Every player, every action, and every achievement
          brings us closer to a sustainable future.
        </p>

        <div className="mission-cards">
          <div className="card">
            <h3>🌱 Environmental Impact</h3>
            <p>
              In-game milestones support eco-projects like tree planting,
              plastic recycling, and ocean cleanup initiatives.
            </p>
          </div>

          <div className="card">
            <h3>🎮 Purposeful Gameplay</h3>
            <p>
              Our games blend entertainment with eco-awareness, making
              sustainability part of the adventure, not a lecture.
            </p>
          </div>

          <div className="card">
            <h3>🌍 Global Community</h3>
            <p>
              Join a growing community of players worldwide who share
              eco-values, collaborate in challenges, and amplify positive change.
            </p>
          </div>

          <div className="card">
            <h3>🔮 Future Vision</h3>
            <p>
              We’re building an ecosystem where gaming rewards translate into
              real-world environmental contributions — from carbon offsetting
              to eco-education for the next generation.
            </p>
          </div>
        </div>
      </section>
<section className="varahan-section">
  <div className="varahan-content">
    {/* Left: Coin */}
    <div className="coin-container">
      <img src={varahan} alt="Varahan Coin" className="coin" />
    </div>

    {/* Center: Text */}
    <div className="varahan-text">
      <h2>Varahan (VR Coin)</h2>
      <p>
        Varahan is our unique eco-reward coin, earned by completing levels, 
        taking part in daily challenges, and contributing to community goals. 
        Unlike ordinary points, VR Coins represent meaningful impact inside 
        and outside the game, unlocking special experiences, upgrades, and 
        a connected eco-future.
      </p>
    </div>

    {/* Right: Button */}
    <div className="varahan-action">
      <a href="/EcoPlayStudios/varahan" className="learn-btn">Learn More →</a>
    </div>
  </div>
</section>
{/* Impact Stats Section */}
<section className="impact">
  <h2>Our Predicted Impact</h2>
  <p className="impact-text">
    Eco Play Studios is on a mission to create meaningful change through gaming.  
    Here are the impact goals we’re working towards — and the progress we’ve made so far.
  </p>
  
  <div className="impact-stats">
    <div className="stat">
      <h3>Waste Diverted</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: "40%" }}></div>
      </div>
      <p>Target: 2.5M+ tons</p>
    </div>

    <div className="stat">
      <h3>Trees Planted</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: "25%" }}></div>
      </div>
      <p>Target: 15K+</p>
    </div>

    <div className="stat">
      <h3>CO₂ Reduced</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: "10%" }}></div>
      </div>
      <p>Target: 890K+ tons</p>
    </div>

    <div className="stat">
      <h3>Partner Organizations</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: "5%" }}></div>
      </div>
      <p>Target: 150+</p>
    </div>
  </div>
</section>


{/* Join Us Section */}
<section className="join-us">
  <h2>Join Our Mission</h2>
  <p>
    Be part of the change. Subscribe to get updates, early access to our eco-games,  
    and invitations to exclusive community events.
  </p>
  <div className="newsletter">
    <input type="email" placeholder="Enter your email" />
    <button type="button">Subscribe</button>
  </div>
</section>


    </div>
  );
}

export default Home;
