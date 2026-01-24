import { useEffect, useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(""); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setTimeout(() => navigate("/thankyou"), 1200);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("Error sending message. Please check your connection.");
    }
  };

  // FAQ toggle + intersection observers for scroll animations
  useEffect(() => {
    // FAQ
    const items = document.querySelectorAll(".faq-item");
    const handler = (e) => e.currentTarget.classList.toggle("active");
    items.forEach((item) => item.addEventListener("click", handler));

    // Scroll-in sections
    const animatedBlocks = document.querySelectorAll(
      ".animate-section, .animate-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    animatedBlocks.forEach((el) => observer.observe(el));

    return () => {
      items.forEach((item) => item.removeEventListener("click", handler));
      animatedBlocks.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="contact-hero animate-section">
        <h1>Contact our Store</h1>
        <p>Every conversation begins with trust. Let’s connect.</p>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-grid animate-section">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Store"
          />
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject:</label>
            <select id="subject" name="subject" required>
              <option value="">Select a subject</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="custom-orders">Custom Orders</option>
              <option value="bulk-orders">Bulk/Corporate Orders</option>
              <option value="styling-assistance">Styling Assistance</option>
              <option value="general-question">General Question</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" disabled={status === "Sending..."}>
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && <div className="form-status">{status}</div>}
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info animate-section">
        <div className="info-card animate-card">
          <strong>Email</strong>
          <br />
          <a href="mailto:homedecor3636@gmail.com">
            homedecor3636@gmail.com
          </a>
        </div>

        <div className="info-card animate-card">
          <strong>Phone</strong>
          <br />
          +91 96661 93636
        </div>

        <div className="info-card animate-card">
          <strong>Business Hours</strong>
          <br />
          Mon – Sun <br/>
          10:00 AM – 10:00 PM
        </div>

        <div className="info-card animate-card">
          <strong>Address</strong>
          <br />
          Opp. Old Murali Theatre,
          <br />
          Women's College Road,
          <br />
          Srikakulam – 532001,
          <br />
          Andhra Pradesh
        </div>
      </section>

      {/* MAP */}
      <section className="map-section animate-section">
        <h2 className="map-title">Visit Our Store</h2>
        <p className="map-sub">HD Home Decor – Living Lives Your Dreams</p>

        <div className="map-container">
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.15336299985!2d83.9017167!3d18.2945934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c15106547c931%3A0x134d6b9f6289a812!2sHome%20Decor!5e0!3m2!1sen!2sin!4v1767878291886!5m2!1sen!2sin" 
  width="100%" 
  height="450" 
  style={{ border: 0 }}  // ✅ FIXED: Object notation
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq animate-section">
        <h2>Quick Help</h2>
        <div className="faq-item">
          <h4>Do you offer styling guidance?</h4>
          <p>Yes, thoughtful guidance tailored to your space.</p>
        </div>
        <div className="faq-item">
          <h4>Is this an online store?</h4>
          <p>No, this is a design showcase and contact platform.</p>
        </div>
        <div className="faq-item">
          <h4>When will you respond?</h4>
          <p>Within 24–48 business hours.</p>
        </div>
        <div className="faq-item">
          <h4>Do you handle corporate decor?</h4>
          <p>Yes, for display and consultation purposes.</p>
        </div>
        <div className="faq-item">
          <h4>Why Home Decor?</h4>
          <p>Because thoughtful spaces create lasting impressions.</p>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="reassurance animate-section">
        <p>
          Thoughtfully curated spaces inspire calm, confidence, and timeless elegance.
        </p>
      </section>
    </>
  );
};

export default Contact;
