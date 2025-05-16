import React from "react";

const AboutSection = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-images">
        {[3, 4, 5, 6].map((n) => (
          <img src={`/images/${n}.png`} alt={`Image ${n}`} key={n} />
        ))}
      </div>
      <div className="about-content">
        <p className="subheading">ABOUT OUR COMPANY</p>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p className="description">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded
          incommode.
        </p>
        <ul className="features-2">
          {["Effortless Accessibility", "Time-Saving Convenience"].map(
            (text, idx) => (
              <React.Fragment key={idx}>
                <li>
                  <div className="list-item">
                    <div className="circular-right-arrow">
                      <i className="fa-solid fa-check fa-xs" />
                    </div>
                    <div>{text}</div>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                    <div className="circular-right-arrow">
                      <i className="fa-solid fa-check fa-xs" />
                    </div>
                    <div>{text}</div>
                  </div>
                </li>
              </React.Fragment>
            )
          )}
        </ul>
        <button
          className="btn-primary"
          onClick={() =>
            (window.location.href = "https://loancrm.samyotech.in/register")
          }
        >
          Get Loan
        </button>
      </div>
    </div>
  </section>
);

export default AboutSection;
