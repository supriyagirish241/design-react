import React from 'react';
import './Ques.css'

const FAQComponent = () => {
  return (
    <div className="FAQContainer">
      <h1 className="FAQHeading" >Frequently Asked Questions</h1>
      <div className="FAQItem">
        <h3 className="Question">Is it easy to create landing pages with Indpro Landing Pages?</h3><span className="PlusSymbol">+</span>
      </div>
      <div className="FAQItem">
        <h3 className="Question">What are the different types of landing pages that I can create?</h3>
        <span className="PlusSymbol">+</span>
      </div>
      <div className="FAQItem">
        <h3 className="Question">Will my landing pages match the look and feel of my website?</h3><span className="PlusSymbol">+</span>
      </div>
    </div>
  );
};
export default FAQComponent;