// About.jsx (SOLID VERSION)
import React, { useEffect, useCallback } from 'react';
import './About.css'; // Use the perfected CSS

const About = () => {
  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 50;
      if (isVisible) {
        el.classList.add("active");
      }
    });
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();
    
    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Hero */}
      <section className="hero-about">
        <div className="hero-content">
          <h1>Who We Are &amp; How We Design</h1>
          <p>A refined journey into thoughtful design, timeless aesthetics, and curated living experiences.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <h2 className="section-title reveal">What Home Decor Means To Us</h2>
        <p className="section-text reveal">
          Home Decor is more than objects, colors, and textures—it is the silent language of a home. Every piece we select, every corner we design, tells a story of care, balance, and intention.
          To us, home decor is the art of creating spaces that breathe comfort, inspire creativity, and reflect the personalities of those who dwell within. It is about harmonizing aesthetics with emotion, function with elegance, and tradition with modernity.
          Each vase, textile, light fixture, or accent is chosen not just for its beauty, but for the way it makes a space feel — warm, inviting, and alive. Home Decor is our promise to turn interiors into experiences, and houses into homes.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="philosophy reveal">
          <h2 className="section-title">Our Philosophy</h2>
          <p className="section-text">
            We believe decor is not just about aesthetics — it is about how a space makes you feel.
            Every piece should add meaning, warmth, and quiet confidence. Our philosophy centers on thoughtful
            curation, refined materials, and designs that age gracefully with time.
          </p>
          <div className="philosophy-images">
            <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800" alt="Decor Philosophy" className="philosophy-img" />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <h2 className="section-title reveal">Core Values &amp; Principles</h2>
        <div className="principles">
          <div className="principle-card reveal">
            <i className="fa-solid fa-gem"></i>
            <h3>Quality Craftsmanship</h3>
            <p>Every piece is meticulously crafted for lasting beauty and durability.</p>
          </div>
          <div className="principle-card reveal">
            <i className="fa-solid fa-clock"></i>
            <h3>Timeless Design</h3>
            <p>Elegant designs that stay relevant across trends and seasons.</p>
          </div>
          <div className="principle-card reveal">
            <i className="fa-solid fa-feather"></i>
            <h3>Thoughtful Selection</h3>
            <p>Pieces chosen to complement spaces and lifestyles with subtle luxury.</p>
          </div>
          <div className="principle-card reveal">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <h3>Customer Promise</h3>
            <p>We provide transparency, premium quality, and an unforgettable experience.</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="story reveal">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800" alt="Store Story" className="story-img" />
          <div className="story-text">
            <h2>The Story So Far</h2>
            <p>
              Our journey is still evolving. What began as a vision for refined interiors is gradually shaping
              into a space where design lovers can explore, experience, and connect with meaningful decor.
              As we grow, our focus remains unchanged — to curate pieces that bring balance, texture, and elegance
              into everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS & CATEGORIES */}
      <section className="section">
        <h2 className="section-title reveal">Our Products &amp; Categories</h2>
        <div className="info-grid">
          <div className="info-card reveal">
            <i className="fa-solid fa-vase"></i>
            <h3>Vases &amp; Accents</h3>
            <p>Elegant decorative pieces that enhance your interiors.</p>
          </div>
          <div className="info-card reveal">
            <i className="fa-solid fa-couch"></i>
            <h3>Furniture &amp; Textiles</h3>
            <p>Curated items that combine comfort, design, and style.</p>
          </div>
          <div className="info-card reveal">
            <i className="fa-solid fa-lightbulb"></i>
            <h3>Lighting &amp; Sculptures</h3>
            <p>Artful designs that add character and warmth to spaces.</p>
          </div>
          <div className="info-card reveal">
            <i className="fa-solid fa-palette"></i>
            <h3>Wall Art &amp; Decor</h3>
            <p>Carefully selected art pieces that reflect elegance and personality.</p>
          </div>
          <div className="info-card reveal">
            <i className="fa-solid fa-couch"></i>
            <h3>Planters &amp; Greenery</h3>
            <p>Beautifully designed planters that bring life to interiors.</p>
          </div>
          <div className="info-card reveal">
            <i className="fa-solid fa-lightbulb"></i>
            <h3>Tabletop &amp; Accessories</h3>
            <p>Functional yet decorative items for everyday living.</p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section">
        <div className="location-box reveal">
          <h2 className="section-title">Visit Our Store</h2>
          <h3>HD Home Decor</h3>
          <p>
            📍 Opp. Old Murali Theatre,<br />
            Women's College Road,<br />
            Srikakulam – 532001, Andhra Pradesh<br /><br />
            Living Lives Your Dreams.<br />
            Experience premium interior &amp; home décor solutions including
            curtains, wallpapers, flooring, blinds, murals, and turnkey projects
            crafted with elegance and innovation.
          </p>
          <div className="store-details">
            <div className="store-contact">
              <i className="fa-solid fa-phone"></i>
              <p>+91 96661 93636</p>
            </div>
            <div className="store-contact">
              <i className="fa-solid fa-envelope"></i>
              <p>homedecor3636@gmail.com</p>
            </div>
            <div className="store-contact">
              <i className="fa-solid fa-clock"></i>
              <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL CLOSING */}
      <section className="emotional-close reveal">
        <div className="emotional-bg">
          <div className="emotional-content">
            <h2>Design That Feels Like Home</h2>
            <p>
              At Home Decor, we believe a home should comfort, inspire, and reflect the people who live in it. 
              Every curated piece brings warmth, balance, and subtle luxury to spaces where life truly happens. 
              Let your home tell a story of elegance, care, and personality.
            </p>
            <div className="emotional-line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
