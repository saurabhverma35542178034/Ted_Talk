import React from 'react';
import './About.css'; // Ensure you have the CSS file for styling

const Watch = ({name}) => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>{name} Ted</h1>
      </div>
      <div className="about-content">
      <p>Watching a TED Talk is an inspiring experience that opens up new perspectives. The talks cover a wide range of topics from technology, science, and business, to personal development and global challenges.</p>

<p>These presentations are usually delivered by experts and thought leaders, making them both informative and engaging. Whether you're looking for new ideas, motivation, or solutions to problems, TED Talks provide valuable insights.</p>

<p>To watch a TED Talk, you can visit the official TED website or search for them on platforms like YouTube. Each talk is typically around 10-20 minutes, making them easy to fit into your schedule.</p>

        </div>
    </div>
  );
}

export default Watch;
