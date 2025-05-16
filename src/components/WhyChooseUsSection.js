import React from "react";

const WhyChooseUsSection = () => (
  <section className="why-choose">
    <div className="why-left">
      <p className="subtitle">WHY CHOOSE OUR LOAN</p>
      <h1 style={{ fontSize: "35px", fontWeight: 100 }}>
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Vivamus semper ac aliquet ac
        massa consequat arcu nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Elit euismod at praesent quam
        fermentum enim sed auctor ac.
      </p>
      <ul className="features-2">
        {["Effortless Accessibility", "Time-Saving Convenience"].flatMap(
          (text) => [
            <li key={text + "1"}>
              <div className="list-item">
                <div className="circular-notebook">
                  <img
                    src="/images/12.png"
                    alt="icon"
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <div>{text}</div>
              </div>
            </li>,
            <li key={text + "2"}>
              <div className="list-item">
                <div className="circular-notebook">
                  <img
                    src="/images/12.png"
                    alt="icon"
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <div>{text}</div>
              </div>
            </li>,
          ]
        )}
      </ul>
      <button
        className="btn-primary-green"
        onClick={() =>
          (window.location.href = "https://loancrm.samyotech.in/register")
        }
      >
        Apply Now
      </button>
    </div>
    <div className="why-right">
      <img src="/images/7.png" alt="Happy customers" />
    </div>
  </section>
);

export default WhyChooseUsSection;
