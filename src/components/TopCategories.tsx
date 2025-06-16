
import React from 'react';

const TopCategories: React.FC = () => {
  const categories = [
    { 
      name: 'Graphic Design', 
      gradient: 'linear-gradient(135deg, #ff006e, #8338ec)', 
      courses: '25',
      icon: '🎨',
      description: 'Logo, Branding & Print'
    },
    { 
      name: 'Video Editing', 
      gradient: 'linear-gradient(135deg, #00f5ff, #3a86ff)', 
      courses: '18',
      icon: '🎬',
      description: 'Motion & Visual Effects'
    },
    { 
      name: 'UI/UX Design', 
      gradient: 'linear-gradient(135deg, #ffbe0b, #fb5607)', 
      courses: '32',
      icon: '📱',
      description: 'Apps & Web Interfaces'
    },
    { 
      name: 'Digital Marketing', 
      gradient: 'linear-gradient(135deg, #8338ec, #ff006e)', 
      courses: '15',
      icon: '📈',
      description: 'Social Media & Ads'
    }
  ];

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #00f5ff, #ff006e, #ffbe0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            🎯 Trending Categories
          </h2>
          <p className="text-white-50 fs-5">Explore the most in-demand skills</p>
        </div>
        
        <div className="row justify-content-center">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div 
                className="text-center h-100 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 245, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-3 position-relative"
                  style={{ 
                    width: '100px', 
                    height: '100px',
                    background: category.gradient,
                    fontSize: '2.5rem'
                  }}
                >
                  {category.icon}
                  <div 
                    className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      bottom: '-10px', 
                      right: '-10px',
                      fontSize: '0.8rem',
                      border: '3px solid',
                      borderColor: category.gradient.includes('ff006e') ? '#ff006e' : '#00f5ff'
                    }}
                  >
                    {category.courses}
                  </div>
                </div>
                
                <h5 className="fw-bold mb-2 text-white">{category.name}</h5>
                <p className="text-white-50 mb-3 small">{category.description}</p>
                
                <button 
                  className="btn btn-sm px-4 py-2 rounded-pill border-0 fw-bold"
                  style={{
                    background: category.gradient,
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                >
                  🚀 Explore
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-white-50 fs-5 mb-4">Ready to start your creative journey?</p>
          <button 
            className="btn fw-bold px-5 py-3 rounded-pill border-0 fs-5"
            style={{
              background: 'linear-gradient(45deg, #ff006e, #8338ec, #00f5ff)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
            }}
          >
            ✨ Browse All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
