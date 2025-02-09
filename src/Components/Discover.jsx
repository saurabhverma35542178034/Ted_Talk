import React from 'react';
import './About.css'; // Ensure you have the CSS file for styling

const About = ({name}) => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>{name} Ted</h1>
      </div>
      <div className="about-content">
      <p>Investor Cathie Wood explores this unique moment in technology, which she sees as being marked by the simultaneous evolution of five pivotal innovation platforms — a scenario unparalleled in history. Exploring the role of AI in reshaping economic paradigms, she predicts a surge in global GDP growth and productivity, underscoring the need for businesses and investors to adapt in order to keep up..</p>
       
        <p>Hi, I'm Ted! Welcome to my Discover Section. Cathie Wood is the founder and CEO of ARK Invest, an investment firm focused on disruptive innovation and technology.</p>
         <p>When I'm not coding, you can find me exploring the outdoors, reading a good book, or experimenting with new recipes in the kitchen. Thank you for visiting my page, and I look forward to connecting with you!</p>
      </div>
    </div>
  );
}

export default About;
