import React from "react";

const FeaturesSection = () => (
  <section className="features">
    {["8.png", "10.png", "9.png"].map((img, index) => (
      <div className="feature-card" key={index}>
        <div className="icon">
          <img src={`/images/${img}`} alt="Icon" />
        </div>
        <div className="card-content">
          <h4>
            {
              [
                "One Easy Application",
                "No Security Required",
                "Quick Payment Way",
              ][index]
            }
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur amet.</p>
        </div>
      </div>
    ))}
  </section>
);

export default FeaturesSection;
