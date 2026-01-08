import React, { useEffect, useState } from "react";
import "./Gallery.css";

const IMAGESROLL = [
  "/images/360/R0014997_20220628213120.JPG",
  "/images/360/R0014998_20220628213149.JPG",
  "/images/360/R0014999_20220628213223.JPG",
  "/images/360/R0015000_20220628213253.JPG",
  "/images/360/R0015001_20220628213334.JPG",
];

const IMAGES = [
  "/images/HD/1657195887500.jpg",
  "/images/HD/1657195887529.jpg",
  "/images/HD/1657195887555.jpg",
  "/images/HD/1657195887579.jpg",
  "/images/HD/1657195887600.jpg",
  "/images/HD/1657195887626.jpg",
  "/images/HD/1657195887647.jpg",
  "/images/HD/1657195887669.jpg",
  "/images/HD/1657195887695.jpg",
  "/images/HD/1657195887729.jpg",
  "/images/HD/1657195887780.jpg",
  "/images/HD/1657195887810.jpg",
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-sliding carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGESROLL.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  // Scroll reveal - FIXED
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    
    const onScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };
    
    // Trigger on mount
    onScroll();
    
    // Add scroll listener with passive flag
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox events
  useEffect(() => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    const clickHandlers = [];
    document.querySelectorAll(".gallery-card img").forEach((img) => {
      const handler = (e) => {
        e.stopPropagation();
        if (lightbox && lightboxImg) {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
        }
      };
      img.addEventListener("click", handler);
      clickHandlers.push({ img, handler });
    });

    const closeHandler = () => {
      if (lightbox) lightbox.style.display = "none";
    };

    if (lightbox) lightbox.addEventListener("click", closeHandler);
    if (closeBtn) closeBtn.addEventListener("click", closeHandler);

    return () => {
      clickHandlers.forEach(({ img, handler }) =>
        img.removeEventListener("click", handler)
      );
      if (lightbox) lightbox.removeEventListener("click", closeHandler);
      if (closeBtn) closeBtn.removeEventListener("click", closeHandler);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % IMAGESROLL.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? IMAGESROLL.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="gallery-page">
      {/* HERO CAROUSEL */}
      <section className="hero-carousel reveal active">
        <div className="carousel-container">
          {IMAGESROLL.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={`carousel-image ${idx === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">
          
        </button>
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">
          
        </button>

        <div className="carousel-indicators">
          {IMAGESROLL.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="hero-content-gallary">
          <h1>Step Into Luxury Living</h1>
          <p>
            Experience refined elegance through curated decor, from serene
            Buddha statues to exquisite floral accents that elevate your space.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <h2 className="section-title reveal">
  <span className="store-word">STORE</span>
  <span className="gallery-word">GALLERY</span>
</h2>


        <div className="gallery-grid">
          {IMAGES.map((src, idx) => (
            <div key={idx} className="gallery-card reveal">
              <img src={src} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="extra-section reveal">
        <h2>Experience Home Decor Differently</h2>
        <p>
          Our store is not just a place to buy decor; it's a journey into
          refined living. Every display, every corner, and every curated piece
          reflects our commitment to craftsmanship, quality, and timeless
          elegance. Step in and feel the inspiration, the balance, and the
          warmth that turns a house into a home.
        </p>
      </section>

      {/* LIGHTBOX */}
      <div id="lightbox">
        <span className="close">×</span>
        <img className="lightbox-img" id="lightbox-img" alt="Preview" />
      </div>
    </div>
  );
};

export default Gallery;
