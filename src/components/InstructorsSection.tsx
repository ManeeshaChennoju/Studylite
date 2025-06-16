
import React from 'react';

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #21262d 0%, #161b22 50%, #0d1117 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #ffbe0b, #fb5607)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            ⚡ Why Choose StudyLite?
          </h2>
        </div>
        
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div 
              className="p-4 h-100 rounded-4"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(131, 56, 236, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(0, 245, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 245, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ 
                  width: '80px', 
                  height: '80px',
                  background: 'linear-gradient(45deg, #00f5ff, #8338ec)',
                  fontSize: '2rem'
                }}
              >
                👨‍🏫
              </div>
              <h5 className="fw-bold mb-3 text-white">World-Class Instructors</h5>
              <p className="text-white-50 mb-3">Learn from industry experts with 10+ years experience</p>
              <div className="fw-bold" style={{ color: '#00f5ff' }}>50+ Expert Mentors</div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div 
              className="p-4 h-100 rounded-4"
              style={{
                background: 'linear-gradient(135degree, rgba(255, 0, 110, 0.1), rgba(255, 190, 11, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 0, 110, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 0, 110, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ 
                  width: '80px', 
                  height: '80px',
                  background: 'linear-gradient(45deg, #ff006e, #ffbe0b)',
                  fontSize: '2rem'
                }}
              >
                🎥
              </div>
              <h5 className="fw-bold mb-3 text-white">Interactive Learning</h5>
              <p className="text-white-50 mb-3">Live classes, practical projects & personalized feedback</p>
              <div className="fw-bold" style={{ color: '#ff006e' }}>500+ Live Sessions</div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div 
              className="p-4 h-100 rounded-4"
              style={{
                background: 'linear-gradient(135deg, rgba(251, 86, 7, 0.1), rgba(58, 134, 255, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(251, 86, 7, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(251, 86, 7, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 86, 7, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(251, 86, 7, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ 
                  width: '80px', 
                  height: '80px',
                  background: 'linear-gradient(45deg, #fb5607, #3a86ff)',
                  fontSize: '2rem'
                }}
              >
                🚀
              </div>
              <h5 className="fw-bold mb-3 text-white">Career Success</h5>
              <p className="text-white-50 mb-3">Job placement assistance & portfolio building support</p>
              <div className="fw-bold" style={{ color: '#fb5607' }}>15k+ Graduates Hired</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
