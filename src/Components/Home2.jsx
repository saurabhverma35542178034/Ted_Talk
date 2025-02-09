import React from 'react';

const Home2 = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>TED Talk: "Breaking Boundaries"</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Speaker: Dr. John Smith</p>
        <p style={{ fontSize: '16px', color: '#888' }}>Duration: 22 minutes</p>
      </header>

      <section style={{ margin: '20px 0' }}>
        <h3>About the Talk</h3>
        <p>
          Dr. John Smith explores the concept of breaking through personal and professional barriers. He shares practical strategies and inspiring examples of individuals who have overcome great obstacles to achieve success.
        </p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h3>Speaker Bio</h3>
        <p>
          Dr. John Smith is a renowned psychologist and motivational speaker, with a passion for helping individuals unlock their full potential. He has authored several best-selling books and has spoken at events around the world.
        </p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h3>Watch the Talk</h3>
        <iframe
          width="100%" 
          height="500"
          src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/talks/talk_143076/eba5215f-bae7-4bac-911b-72f711573173/JennyChase_2024T-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80" 
          title="TED Talk: Breaking Boundaries"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h3>Audience Reactions</h3>
        <p>
          "This talk was truly inspiring! Dr. Smith's ideas on overcoming obstacles really resonated with me."
        </p>
        <p>
          "A powerful and practical message. I can't wait to implement the strategies shared in this TED Talk!"
        </p>
      </section>

      <section style={{ margin: '20px 0' }}>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Overcoming limiting beliefs is crucial for success.</li>
          <li>Action steps to break through mental and physical boundaries.</li>
          <li>Success is not defined by obstacles, but by how we respond to them.</li>
        </ul>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>Follow Dr. John Smith on Twitter: @drjohnsmith</p>
        <p>Connect with TED on <a href="https://www.ted.com" target="_blank" rel="noopener noreferrer">TED.com</a></p>
      </footer>
    </div>
  );
};

export default Home2;
