import React from "react";

const faqs = [
  [
    "Is there a free trial available?",
    "Yes, we have a free trial. No card required when you sign up.",
  ],
  ["Can I change my plan later?", "Yes, plans can be changed anytime."],
  ["Can other info be added to invoice?", "Absolutely, customize as needed."],
  ["How does billing work?", "Billed monthly or annually based on plan."],
  [
    "How do I change my account email?",
    "You can update your email in account settings.",
  ],
];

const FAQSection = () => (
  <section className="faq">
    <div className="faq-left">
      <p className="subtitle">FAQ's</p>
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <p>
        From the tiny fine jobs of the rich. They are glad and move into files.
        Improving and distracts any industry was household appreciated income.
      </p>
      <img src="/images/7.png" alt="FAQ image" />
    </div>
    <div className="faq-right">
      {faqs.map(([question, answer], idx) => (
        <details key={idx}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQSection;
