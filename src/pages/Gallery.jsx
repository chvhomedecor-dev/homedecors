import React, { useEffect } from "react";
import "./Gallery.css";

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
  useEffect(() => {
    // Scroll reveal
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

  useEffect(() => {
    // Lightbox events handled with state-like DOM manipulation
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

  return (
    <div className="gallery-page">
      {/* HEADER */}

      {/* HERO */}
      <section className="hero reveal active">
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
          Our store is not just a place to buy decor; it’s a journey into
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
