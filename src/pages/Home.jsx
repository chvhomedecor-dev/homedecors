import React, { useEffect } from "react";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const showLoaderAndRedirect = (url) => {
    const loader = document.getElementById("page-loader");
    if (loader) {
      loader.classList.add("active");
      setTimeout(() => {
        window.location.href = url;
      }, 1200);
    }
  };

  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const triggerBottom = window.innerHeight * 0.85;

      reveals.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

    // run once on mount
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div>
      {/* PAGE LOADER */}
      <div id="page-loader" className="page-loader">
        <div className="spinner"></div>
      </div>

      {/* HERO */}
      <section className="hero-home">
        <div className="hero-content reveal">
          <button
            className="btn"
            onClick={() => showLoaderAndRedirect("products.html")}
          >
            View Collection
          </button>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section>
        <div className="brand-intro reveal">
          <h2 className="section-title">Crafted for Modern Living</h2>
          <p>
            Designed for contemporary lifestyles, our collection blends refined
            aesthetics with everyday functionality. Each piece is thoughtfully
            crafted to complement modern interiors while offering lasting
            quality, comfort, and visual harmony. From clean lines to rich
            textures, every detail reflects a balance of sophistication and
            practicality—created for homes that value both beauty and purpose.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section>
        <h2 className="section-title reveal">Our Core Principles</h2>
        <div className="principles">
          <div className="principle-card-home reveal delay-1">
            <i className="fa-solid fa-gem"></i>
            <h3>Refined Selection</h3>
            <p>Chosen for craftsmanship, material quality, and visual harmony.</p>
          </div>
          <div className="principle-card-home reveal delay-2">
            <i className="fa-solid fa-leaf"></i>
            <h3>Timeless Aesthetics</h3>
            <p>Designs that remain relevant beyond trends and seasons.</p>
          </div>
          <div className="principle-card-home reveal delay-3">
            <i className="fa-solid fa-heart"></i>
            <h3>Thoughtful Design</h3>
            <p>Decor that enhances mood, space, and everyday living.</p>
          </div>
          <div className="principle-card-home reveal delay-4">
            <i className="fa-solid fa-gift"></i>
            <h3>Versatile Styling</h3>
            <p>Pieces that blend effortlessly into different interior styles.</p>
          </div>
        </div>
      </section>

      {/* CURATION */}
      <section>
        <div className="curation reveal">
          <h2 className="section-title">What We Curate</h2>
          <p>
            Our collection brings together carefully chosen décor elements that
            transform everyday interiors into expressive, inviting spaces. Every
            piece is selected with attention to design, material, and
            finish—ensuring it complements modern lifestyles while maintaining a
            sense of warmth and refinement. We curate décor that tells a story,
            enhances ambiance, and adds lasting value to your home.
          </p>
        </div>
      </section>

      {/* GIFT GRID */}
      <section className="gifting">
        <h2 className="section-title reveal">Decor for Inspired Spaces</h2>
        <div className="gift-grid">
          <div className="gift-card reveal delay-1">
            <img src="/images/accent.jpg" alt="Statement Accents" />
            <h3>Statement Accents</h3>
          </div>

          <div className="gift-card reveal delay-2">
            <img src="/images/living_space.jpg" alt="Calm Living Spaces" />
            <h3>Calm Living Spaces</h3>
          </div>

          <div className="gift-card reveal delay-3">
            <img src="/images/elegance.jpg" alt="Minimal Elegance" />
            <h3>Minimal Elegance</h3>
          </div>
        </div>
      </section>

      {/* STORE EXPERIENCE */}
      <section>
        <div className="store-exp reveal">
          <h2 className="section-title">The In-Store Experience</h2>
          <p>
            Our store is a curated visual journey where balance, texture, and
            craftsmanship come together. Thoughtfully styled displays help
            visitors experience how decor pieces interact within real spaces.
            Soft lighting and intentional layouts create a calm, immersive
            environment that inspires ideas and allows each piece to be
            appreciated in its own context.
          </p>
        </div>
      </section>

      {/* SIGNATURE COLLECTION */}
     <section className="signature-home reveal-home">
  <h2 className="section-title-home">Signature Collection</h2>

  <p className="sig-desc-home">
    Explore select pieces that embody our design philosophy — timeless,
    elegant, and thoughtfully curated.
  </p>

  <div className="sig-grid-home">
    <div className="sig-card-home reveal delay-1">
      <h3>Elevated Decor Elements</h3>
      <p className="sig-desc-home">
        From elegant vases to refined tabletop pieces, our elevated decor
        elements add sophistication.
      </p>
    </div>

    <div className="sig-card-home reveal delay-2">
      <h3>Decorative Ceramics</h3>
      <p className="sig-desc-home">
        Handcrafted ceramics that combine artful design and functional
        beauty.
      </p>
    </div>

    <div className="sig-card-home reveal delay-3">
      <h3>Elegant Accents</h3>
      <p className="sig-desc-home">
        Statement pieces selected for their silhouettes and harmonious
        proportions.
      </p>
    </div>
  </div>
</section>
<section className="whatsapp">
  <button
    onClick={() =>
      window.open(
        "https://wa.me/919666193636?text=Hi%20I%20am%20interested%20in%20your%20services",
        "_blank"
      )
    }
  >
    <i className="fa-brands fa-whatsapp"></i>
  </button>
</section>
<section class="feedback-section">
  <h2 class="feedback-title">What Our Customers Say</h2>

  <div class="feedback-slider">
    <div class="feedback-track">
      
      <div class="feedback-card">
        <div class="stars">★★★★★</div>
        <p class="review-text">
          Elegant designs and premium quality. Our home feels completely transformed.
        </p>
        <span class="reviewer">— Anjali R.</span>
      </div>

      <div class="feedback-card">
        <div class="stars">★★★★★</div>
        <p class="review-text">
          Outstanding service and beautiful decor collections. Highly recommended!
        </p>
        <span class="reviewer">— Ramesh K.</span>
      </div>

      <div class="feedback-card">
        <div class="stars">★★★★☆</div>
        <p class="review-text">
          Loved the wallpapers and curtains. The finishing is top-notch.
        </p>
        <span class="reviewer">— Sravani P.</span>
      </div>

      <div class="feedback-card">
        <div class="stars">★★★★★</div>
        <p class="review-text">
          Professional team with a great eye for detail. Truly premium interiors.
        </p>
        <span class="reviewer">— Naveen S.</span>
      </div>

      <div class="feedback-card">
        <div class="stars">★★★★★</div>
        <p class="review-text">
          Elegant designs and premium quality. Our home feels completely transformed.
        </p>
        <span class="reviewer">— Anjali R.</span>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
