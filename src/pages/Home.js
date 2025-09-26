import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import varahan from "../assets/images/coin.png"

function Home() {
    const gamesItems = [
    {
      img: news1, // replace later with real game image
      title: "RecycleRush",
      desc: "Sort waste, earn rewards, and join the eco-movement. Our flagship recycling challenge is live now!",
      link: "#", // later add Play Store / itch.io link
      comingSoon: false,
    },
    {
      img: news2,
      title: "Rooftop Farming",
      desc: "Experience sustainable farming in the city! Grow crops, manage resources, and build your green rooftop.",
      link: "#",
      comingSoon: true,
    },
    {
      img: news3,
      title: "Kitchen Garden",
      desc: "Transform your kitchen scraps into a thriving garden. Learn eco-friendly habits through interactive play.",
      link: "#",
      comingSoon: true,
    },
    
  ];

    const newsItems = [
    {
      img: news1,
      tag: "GAME RELEASE",
      date: "9/24/2025",
      title: "RecycleRush v1.0 Officially Launched",
      desc: "Our flagship eco-gaming experience is here! Start sorting waste, earn rewards, and join the movement to turn play into real-world environmental impact.",
    },
    {
      img: news2,
      tag: "UPCOMING",
      date: "Coming Soon",
      title: "Rooftop Farming & Kitchen Garden",
      desc: "Two new eco-games are in the works! One brings rooftop farming to life, while Kitchen Garden explores kitchen farming in a fun, interactive way.",
    },
    {
      img: news3,
      tag: "COMMUNITY",
      date: "9/18/2025",
      title: "Varahan (VR Coin) Community Update",
      desc: "Varahan is evolving! More ways to earn, collect, and showcase your VR Coins are on the horizon, giving our players a glimpse into a connected eco-reward future.",
    },
      {
    img: news3, // you can replace with a proper investor-related image later
    tag: "INVESTORS",
    date: "9/20/2025",
    title: "EcoPlay Studios Investor Briefing",
    desc: "Exciting opportunities ahead! Our growth roadmap, eco-reward model, and player-driven impact initiatives open doors for investors to join us in building a sustainable gaming future.",
  },
  ];
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
        <a href="/EcoPlayStudios/news" className="news-link">
          Go To News Page →
        </a>
      </div>

      <Swiper
        modules={[Pagination, Mousewheel]} // ✅ include Mousewheel
        spaceBetween={20}
        navigation
        pagination={{ type: "progressbar" }} // ✅ bar pagination
        mousewheel={{ forceToAxis: true }} // ✅ scroll horizontally instead of vertically
        breakpoints={{
          0: { slidesPerView: 1 },   // mobile → 1 card
          768: { slidesPerView: 3 }, // desktop → 3 cards
        }}
        grabCursor={true} // ✅ makes it draggable
      >
        {newsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="news-card">
              <img src={item.img} alt={item.title} />
              <div className="news-content">
                <span className="news-tag">{item.tag}</span> |{" "}
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    {/* Play Our Games Section */}
    <section className="games">
      <h2>Play Our Games</h2>
      <p className="games-text">
        Explore our growing library of eco-themed games. Each game is designed 
        to be fun, rewarding, and impactful — helping you make a difference 
        while you play.
      </p>

      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={20}
        navigation
        pagination={{ type: "progressbar" }}
        mousewheel={{ forceToAxis: true }}
        breakpoints={{
          0: { slidesPerView: 1 },   // mobile → 1 card
          768: { slidesPerView: 3 }, // desktop → 3 cards
        }}
        grabCursor={true}
      >
        {gamesItems.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="game-card">
              <img src={game.img} alt={game.title} />
              <h3>{game.title}</h3>
              <p>{game.desc}</p>
              <a 
                href={game.link || "#"} 
                className={`game-btn ${game.comingSoon ? "disabled" : ""}`}
              >
                {game.comingSoon ? "Coming Soon" : "Play Now →"}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
      <p className="sanskrit-quote">अश्वक्यम् प्रकृते श्रुते जीवनम्</p>
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
    {/* Investors Section */}
    <section className="investors">
      <h2>For Our Investors</h2>
      <p className="investors-text">
        At EcoPlayStudios, we believe in building not only eco-friendly games 
        but also a sustainable business ecosystem. We welcome forward-thinking 
        investors to join our journey of combining entertainment with 
        real-world environmental impact.
      </p>

      {/* Stats Row */}
      <div className="investors-stats">
        <div className="stat-box">
          <h3>10K+</h3>
          <p>Active Players</p>
        </div>
        <div className="stat-box">
          <h3>3</h3>
          <p>Games in Development</p>
        </div>
        <div className="stat-box">
          <h3>150+</h3>
          <p>Community Partners</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="investors-actions">
        <a href="/EcoPlayStudios/investors" className="invest-btn">Learn More →</a>
        <a href="mailto:contact@ecoplaystudios.com" className="invest-btn secondary">Contact Us</a>
        <a href="/EcoPlayStudios/investors-deck.pdf" className="invest-btn pitch" target="_blank" rel="noopener noreferrer">
          Download Pitch Deck
        </a>
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
