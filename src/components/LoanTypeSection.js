// import React from "react";

// const loanTypes = [
//   "Business Loan",
//   "Education Loan",
//   "Home Loan",
//   "Vehicles Loan",
//   "Personal Loan",
//   "Gold Loan",
// ];

// const LoanTypesSection = () => (
//   <section className="loan-types">
//     <div className="loan-header">
//       <div>
//         <p className="subtitle">OUR LOANS</p>
//         <h2>Explore the range of Fund Money’s Financial Services</h2>
//       </div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur. Vivamus semper ac aliquet ac
//         massa consequat arcu nunc.
//       </p>
//     </div>
//     <div className="loan-grid">
//       {loanTypes.map((type, index) => (
//         <div className="loan-card" key={index}>
//           <h3 style={{ color: "black" }}>{type}</h3>
//           <p>
//             Empower your business with fast, transparent financing – no hidden
//             charges.
//           </p>
//           <ul className="horizontal-list">
//             {["Quick access", "Minimal documentation"].map((item, i) => (
//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "4px" }}
//                 key={i}
//               >
//                 <div className="circular-check-arrow">
//                   <i className="fa-solid fa-check fa-2xs" />
//                 </div>
//                 <div style={{ fontSize: "15px", fontWeight: 500 }}>{item}</div>
//               </div>
//             ))}
//           </ul>
//           <button className="btn-primary">Apply Now</button>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default LoanTypesSection;

import React, { useEffect, useState } from "react";
import axios from "axios"; // Install via npm if not already: npm install axios

const LoanTypesSection = () => {
  const [loanTypes, setLoanTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoanTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/loanType/list"
        ); // 🔁 Replace with your API URL
        console.log(response.data);
        setLoanTypes(response.data.getAllResult);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching loan types:", err);
        setError("Failed to load loan types.");
        setLoading(false);
      }
    };

    fetchLoanTypes();
  }, []);

  return (
    <section className="loan-types">
      <div className="loan-header">
        <div>
          <p className="subtitle">OUR LOANS</p>
          <h2>Explore the range of Fund Money’s Financial Services</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vivamus semper ac aliquet ac
          massa consequat arcu nunc.
        </p>
      </div>

      {loading && <p>Loading loan types...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="loan-grid">
        {loanTypes.map((type, index) => (
          <div className="loan-card" key={index}>
            <h3 style={{ color: "black" }}>{type.loanName || type}</h3>
            <p>
              {type?.description ||
                "Empower your business with Fast, transparent financing – no hidden charges."}
            </p>
            <ul className="horizontal-list">
              {["Quick access", "Minimal documentation"].map((item, i) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  key={i}
                >
                  <div className="circular-check-arrow">
                    <i className="fa-solid fa-check fa-2xs" />
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 500 }}>
                    {item}
                  </div>
                </div>
              ))}
            </ul>
            <button
              className="btn-primary"
              onClick={() =>
                (window.location.href = "https://loancrm.samyotech.in/register")
              }
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanTypesSection;
