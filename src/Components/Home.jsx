import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>TED Talk: "The Power of Curiosity"</h1>
        <p>Speaker: Jane Doe</p>
        <p>Duration: 18 minutes</p>
      </header>

      <section>
        <h3>About the Talk</h3>
        <p>
          In this inspiring TED Talk, Jane Doe shares insights into how curiosity can drive personal growth, creativity, and innovation. She discusses the importance of asking questions and seeking understanding in every aspect of life.
        </p>
      </section>

      <section>
        <h3>Watch the Talk</h3>
        <iframe 
          width="70%" 
          height="500" 
          src="https://www.youtube.com/embed/VIDEO_ID" 
          title="TED Talk: The Power of Curiosity" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <h3>Key Takeaways</h3>
        <ul>
          <li>The importance of being curious in all situations.</li>
          <li>How curiosity can lead to creativity and innovative solutions.</li>
          <li>The role of asking questions in overcoming challenges.</li>
        </ul>
      </section>
      
      <footer>
        <p>Follow Jane on Twitter: @janedoe</p>
      </footer>
    </div>
  );
};

export default Home;
