import React from "react";

const LoanFinderSection = () => (
  <section className="loan-finder">
    <p className="loan-finder-para">One Step closer to finding</p>
    <p className="loan-finder-para">your perfect Loan!</p>
    <div className="form-grid">
      {["💰 Select Amount", "📄 Select Your Loan", "📍 Your Location"].map(
        (text, index) => (
          <div className="form-box" key={index}>
            {text}
          </div>
        )
      )}
    </div>
    <p className="disclaimer">
      * Your information is 100% secure. We do not share your data with other
      parties.
    </p>
    <button
      className="btn-dark"
      onClick={() =>
        (window.location.href = "https://loancrm.samyotech.in/register")
      }
    >
      Apply Now
    </button>
  </section>
);

export default LoanFinderSection;
