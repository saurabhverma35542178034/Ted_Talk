import React from 'react';
import './About.css'; // Ensure you have the CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About Ted</h1>
      </div>
      <div className="about-content">
        <p>Hi, I'm Ted! Welcome to my page. I am a passionate developer with a love for creating innovative solutions. My journey in the tech world began at a young age, and ever since, I've been dedicated to honing my skills and expanding my knowledge.</p>
        <p>Over the years, I've worked on numerous projects that span a wide range of technologies and industries. Whether it's web development, mobile app development, or machine learning, I always strive to deliver high-quality work and exceed expectations.</p>
        <p>When I'm not coding, you can find me exploring the outdoors, reading a good book, or experimenting with new recipes in the kitchen. Thank you for visiting my page, and I look forward to connecting with you!</p>
      </div>
    </div>
  );
}

export default About;
