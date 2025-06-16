
import React from 'react';

interface MentorCardProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  students: string;
  specialty: string;
  gradient: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, title, image, rating, students, specialty, gradient }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div 
      className="card h-100 border-0 text-center overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '25px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 245, 255, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="card-body p-4">
        <div className="position-relative mb-3">
          <div 
            className="mx-auto position-relative"
            style={{ width: '100px', height: '100px' }}
          >
            <div 
              className="w-100 h-100 rounded-circle p-1"
              style={{ background: gradient }}
            >
              <img 
                src={image} 
                alt={name}
                className="w-100 h-100 rounded-circle object-fit-cover"
                style={{ border: '3px solid #1a1a1a' }}
              />
            </div>
            <div 
              className="position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '30px',
                height: '30px',
                background: gradient,
                fontSize: '1rem'
              }}
            >
              ⭐
            </div>
          </div>
        </div>
        
        <h6 className="fw-bold text-white mb-1">{name}</h6>
        <p className="small mb-2" style={{ color: '#00f5ff' }}>{title}</p>
        <p className="small text-white-50 mb-3">{specialty}</p>
        
        <div className="d-flex align-items-center justify-content-center mb-3">
          <span style={{ color: '#ffbe0b', fontSize: '1rem' }}>⭐</span>
          <span className="fw-bold text-white ms-2">{rating}</span>
          <span className="text-white-50 small ms-2">({students} students)</span>
        </div>
        
        <button 
          className="btn btn-sm px-4 py-2 rounded-pill border-0 fw-bold"
          style={{
            background: gradient,
            color: '#fff',
            fontSize: '0.85rem'
          }}
        >
          🎯 Connect
        </button>
      </div>
    </div>
  </div>
);

const MentorsSection: React.FC = () => {
  const mentors = [
    {
      name: "Alex Rivera",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      students: "5.2k",
      specialty: "Brand Design & Strategy",
      gradient: "linear-gradient(45deg, #ff006e, #8338ec)"
    },
    {
      name: "Maya Chen",
      title: "Video Production Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616b95189a9?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      students: "3.8k",
      specialty: "Motion Graphics & VFX",
      gradient: "linear-gradient(45deg, #00f5ff, #3a86ff)"
    },
    {
      name: "Jordan Blake",
      title: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      students: "4.1k",
      specialty: "App & Web Design",
      gradient: "linear-gradient(45deg, #ffbe0b, #fb5607)"
    },
    {
      name: "Marcus Thompson",
      title: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      students: "2.9k",
      specialty: "Marketing & Social Media",
      gradient: "linear-gradient(45deg, #8338ec, #ff006e)"
    }
  ];

  return (
    <section className="py-5" id="mentors" style={{
      background: 'linear-gradient(135deg, #161b22 0%, #0d1117 50%, #21262d 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #8338ec, #00f5ff, #ff006e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            👨‍🏫 Meet Our Star Mentors
          </h2>
          <p className="text-white-50 fs-5">Learn from industry leaders who've shaped the creative world</p>
        </div>
        
        <div className="row">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-white-50 mb-4">🚀 Ready to learn from the best?</p>
          <button 
            className="btn fw-bold px-5 py-3 rounded-pill border-0 fs-5"
            style={{
              background: 'linear-gradient(45deg, #00f5ff, #8338ec, #ff006e)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)'
            }}
          >
            🎯 View All Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
