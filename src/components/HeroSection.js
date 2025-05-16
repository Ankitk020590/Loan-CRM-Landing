import React from "react";

const HeroSection = () => (
  <header
    className="hero"
    style={{ background: "url('/images/1.png') center/cover no-repeat" }}
  >
    <nav className="navbar">
      <div className="logo">
        <img src="/images/Logo_2.png" alt="Logo" />
      </div>
      <div className="nav-buttons">
        <button className="btn-outline">Contact Us</button>
        <button
          className="btn-primary"
          onClick={() =>
            (window.location.href = "https://loancrm.samyotech.in/register")
          }
        >
          Get Loan
        </button>
      </div>
    </nav>
    <div className="hero-content">
      <button className="tag-button">Top Loan Provider</button>
      <h1>Loans with no hidden charges</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vivamus semper ac aliquet ac
        massa consequat arcu nunc.
      </p>
      <div className="hero-buttons">
        <button
          className="btn-primary-hero"
          onClick={() =>
            (window.location.href = "https://loancrm.samyotech.in/register")
          }
        >
          Get Loan Now
          <i className="bi bi-arrow-up-right" style={{ marginLeft: "5px" }}></i>
        </button>
        <button className="btn-outline">
          Contact With Us
          <i className="bi bi-arrow-up-right" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>
    </div>
  </header>
);

export default HeroSection;
