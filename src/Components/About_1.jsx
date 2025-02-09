import React from 'react'

const About_1 = ({id}) => {
  return (
    <div>
      <h1>About-{id}</h1>
      <p>About-{id}</p>
      <header>
        <h1>TED Talk: "About"</h1>
        <p>Speaker: Jane Doe</p>
        <p>Duration: 18 minutes</p>
      </header>

      <section>
        <h3>About the Talk</h3>
        <p>
          In this inspiring TED Talk, Jane Doe shares insights into how curiosity can drive personal growth, creativity, and innovation. She discusses the importance of asking questions and seeking understanding in every aspect of life.
        </p>
      </section>
    </div>
  )
}

export default About_1
