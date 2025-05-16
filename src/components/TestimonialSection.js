import React from "react";

const TestimonialsSection = () => (
  <section className="testimonials">
    <p className="subtitle">OUR TESTIMONIALS</p>
    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
    <div className="testimonial-grid">
      {[1, 2, 3].map((n) => (
        <div className="testimonial-card" key={n}>
          <div className="user-header">
            <img src="/images/2.jpg" alt="User" />
            <div className="user-info">
              <span className="name">Leo</span>
              <div className="designation-stars">
                <span className="designation">Lead Designer</span>
                <span className="stars">⭐️⭐️⭐️⭐️☆</span>
              </div>
            </div>
          </div>
          <h5>It was a very good experience</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
