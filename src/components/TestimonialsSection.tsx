
import React from 'react';

interface TestimonialProps {
  name: string;
  title: string;
  rating: number;
  text: string;
  image: string;
  gradient: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, rating, text, image, gradient }) => (
  <div className="col-md-6 mb-4">
    <div 
      className="card h-100 border-0 p-4"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 245, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="card-body p-0">
        <div className="d-flex align-items-center mb-4">
          <div 
            className="rounded-circle me-3 p-1"
            style={{ background: gradient }}
          >
            <img 
              src={image} 
              alt={name}
              className="rounded-circle"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
            />
          </div>
          <div className="flex-grow-1">
            <h6 className="fw-bold mb-1 text-white">{name}</h6>
            <small style={{ color: '#00f5ff' }}>{title}</small>
          </div>
          <div className="text-end">
            <div style={{ color: '#ffbe0b', fontSize: '1.2rem' }}>
              {'⭐'.repeat(rating)}
            </div>
            <small className="text-white-50">{rating}.0</small>
          </div>
        </div>
        
        <div 
          className="p-3 rounded-3 position-relative"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p className="text-white-50 mb-0 fst-italic">"{text}"</p>
          <div 
            className="position-absolute"
            style={{
              top: '-5px',
              left: '20px',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid rgba(255, 255, 255, 0.1)'
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Williams",
      title: "Freelance Designer",
      rating: 5,
      text: "StudyLite transformed my career! The courses are incredibly detailed and the mentors are always available. I landed my dream job just 3 months after completing the program. The neon interface makes learning so engaging!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b95189a9?w=60&h=60&fit=crop&crop=face",
      gradient: "linear-gradient(45deg, #ff006e, #8338ec)"
    },
    {
      name: "David Park",
      title: "Video Editor",
      rating: 5,
      text: "The video editing course exceeded all my expectations. The hands-on projects and real-world examples helped me build an amazing portfolio. Now I'm working with top brands and earning 3x more than before!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      gradient: "linear-gradient(45deg, #00f5ff, #3a86ff)"
    },
    {
      name: "Lisa Zhang",
      title: "UI/UX Designer",
      rating: 5,
      text: "The community support at StudyLite is unmatched. Every question gets answered, every project gets reviewed. The modern teaching approach and interactive platform made complex concepts easy to understand.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      gradient: "linear-gradient(45deg, #ffbe0b, #fb5607)"
    },
    {
      name: "Mike Rodriguez",
      title: "Creative Director",
      rating: 5,
      text: "Best investment I've ever made! The curriculum is constantly updated with industry trends. The practical approach and portfolio guidance helped me transition from corporate to freelance successfully.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      gradient: "linear-gradient(45deg, #8338ec, #ff006e)"
    }
  ];

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #21262d 0%, #161b22 50%, #0d1117 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #ffbe0b, #ff006e, #00f5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            💬 Success Stories
          </h2>
          <p className="text-white-50 fs-5">Hear from our amazing students who transformed their careers</p>
        </div>
        
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <button 
              className="btn btn-sm rounded-circle me-3 border-0"
              style={{ 
                width: '50px', 
                height: '50px',
                background: 'linear-gradient(45deg, #00f5ff, #8338ec)',
                color: '#fff',
                fontSize: '1.2rem'
              }}
            >
              ‹
            </button>
            <span className="text-white-50 mx-3 fs-5">
              ⭐ <strong style={{color: '#ffbe0b'}}>4.9/5</strong> from 2000+ reviews
            </span>
            <button 
              className="btn btn-sm rounded-circle ms-3 border-0"
              style={{ 
                width: '50px', 
                height: '50px',
                background: 'linear-gradient(45deg, #ff006e, #8338ec)',
                color: '#fff',
                fontSize: '1.2rem'
              }}
            >
              ›
            </button>
          </div>
          
          <button 
            className="btn fw-bold px-5 py-3 rounded-pill border-0 fs-5"
            style={{
              background: 'linear-gradient(45deg, #ff006e, #00f5ff, #8338ec)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
            }}
          >
            🚀 Join Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
