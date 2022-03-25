import React from "react";

import Button from "../../shared/components/Button";
import "./PaymentPlan.css";
const PaymentPlan = () => {
  return (
    <div className="section-payment">
      <h2 className="section-title">
        Choose the plan that’s right for your business
      </h2>
      <p className="section-subtitle ">
        Lorem ipsum dolor sit amen, cocteau advising elif. Suspending varus enif
        in eros.
      </p>

      <div className="section-payment_content-wrapper">
        <div className="section-payment_content-item">
          <div className="section-payment_content-item-line"></div>
          <h3 className="section-payment_content-item-title">Starter plan</h3>
          <p className="section-payment_content-item-price">Free</p>
          <span>per month</span>
          <p className="section-payment_content-item-text ">
            Lorem ipsum dolor sit ament, cocteau advising eliot.
          </p>
          <Button
            className="section-payment_content-item-btn"
            btnText="Get Started"
          />
        </div>
        <div className="section-payment_content-item">
          <div className="section-payment_content-item-basic"></div>
          <h3 className="section-payment_content-item-title">Basic plan</h3>
          <p className="section-payment_content-item-price basic-price">$20.00</p>
          <span>per month</span>
          <p className="section-payment_content-item-text ">
            Lorem ipsum dolor sit amer, cocteau discing eliot.
          </p>
          <Button
            className="section-payment_content-item-btn"
            btnText="Get Started"
          />
        </div>
        <div className="section-payment_content-item">
          <div className="section-payment_content-item-enterprise "></div>
          <h3 className="section-payment_content-item-title">Enterprise plan</h3>
          <p className="section-payment_content-item-price enterprise-price">$50.00</p>
          <span>per month</span>
          <p className="section-payment_content-item-text ">
            Lorem ipsum dolor sit ament, cocteau advising eliot.
          </p>
          <Button
            className="section-payment_content-item-btn"
            btnText="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
