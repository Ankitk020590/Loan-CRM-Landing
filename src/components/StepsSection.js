import React from "react";

const steps = [
  "Online Application",
  "Pick A Plan",
  "Compare Quotes",
  "Sign Your Contract",
];

const StepsSection = () => (
  <section className="steps">
    <p className="subtitle center">Easy 4-Step Funding Solutions</p>
    <p className="center">
      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
      consectetur.
    </p>
    <div className="step-grid">
      {steps.map((step, i) => (
        <div className="step-wrapper" key={i}>
          <div className="step-label">STEP</div>
          <div className="step-card">
            <div className="step-number-outer">
              <div className="step-number">{i + 1}</div>
            </div>
            <h4>{step}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. No hidden charges, no
              lengthy paperwork.
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StepsSection;
