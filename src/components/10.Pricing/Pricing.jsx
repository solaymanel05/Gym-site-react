import React from "react";
import "./Pricing.css";
import { pricingData } from "../../assets/data/data";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="title-pricing">
        <h2>Our Pricing Plans</h2>
        <h1>Exclusive Pricing Plan</h1>
        <p>
          Core revive an unknown printer took a galley of type and scrambled
          make a type specimen book.
        </p>
        </div>
      
        <div className="pricing-container">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card">
              <img
                src={plan.image}
                alt={`${plan.name}`}
                className="pricing-image"
              />
              <p>
                <span className="pric-spa">{plan.price}</span>/month
              </p>
              <h3>{plan.name}</h3>

              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Link to={"/ContactP"}><button>Choose Plan</button></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
