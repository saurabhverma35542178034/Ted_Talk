import React from 'react';

const testimonials = [
  {
    quote: "This company provided outstanding service and support throughout the entire project.",
    author: "Jane Doe"
  },
  {
    quote: "I was thoroughly impressed with the quality and professionalism.",
    author: "John Smith"
  },
  {
    quote: "Amazing experience from start to finish. Highly recommend.",
    author: "Sarah Lee"
  }
];

const Home3 = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>What Our Clients Say</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
          >
            <p style={{ fontStyle: 'italic', color: '#555' }}>"{testimonial.quote}"</p>
            <p style={{ textAlign: 'right', color: '#888' }}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home3;
