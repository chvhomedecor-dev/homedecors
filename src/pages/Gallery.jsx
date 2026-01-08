import React, { useEffect, useState } from "react";
import "./Gallery.css";

const IMAGESROLL = [
  "/images/360/R0014997_20220628213120.jpg",
  "/images/360/R0014998_20220628213149.jpg",
  "/images/360/R0014999_20220628213223.jpg",
  "/images/360/R0015000_20220628213253.jpg",
  "/images/360/R0015001_20220628213334.jpg",
];

const IMAGES = [
  // Row 1
  "/images/HD/1657195887500.jpg",
  "/images/HD/1657195887529.jpg",
  "/images/HD/1657195887555.jpg",
  // Row 2
  "/images/HD/1657195887579.jpg",
  "/images/HD/1657195887600.jpg",
  "/images/HD/1657195887626.jpg",
  // Row 3
  "/images/HD/1657195887647.jpg",
  "/images/HD/1657195887669.jpg",
  "/images/HD/1657195887695.jpg",
  // Row 4
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
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox events
  useEffect(() => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const clickHandlers = [];
    document.querySelectorAll(".gallery-card img").forEach((img) => {
      const handler = () => {
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

    return () => {
      clickHandlers.forEach(({ img, handler }) =>
        img.removeEventListener("click", handler)
      );
      if (lightbox) lightbox.removeEventListener("click", closeHandler);
    };
  }, []);

  // Manual slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % IMAGESROLL.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + IMAGESROLL.length) % IMAGESROLL.length);
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

        {/* Carousel Controls */}
        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {IMAGESROLL.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="hero-content">
          <h1>Step Into Luxury Living</h1>
          <p>
            Experience refined elegance through curated decor, from serene
            Buddha statues to exquisite floral accents that elevate your space.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <h2 className="section-title reveal">Store Gallery</h2>

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
