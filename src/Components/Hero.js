import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Route 66</h1>
        <p>
          Explore the iconic Route 66 with our expert travel guides, inspired by
          the adventures in the movie 'Cars.' Discover hidden gems and create
          unforgettable memories.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero
