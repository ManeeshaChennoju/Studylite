
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-5" id="contact" style={{
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
      borderTop: '2px solid rgba(0, 245, 255, 0.3)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold mb-4" style={{ 
              color: '#00f5ff',
              textShadow: '0 0 20px #00f5ff'
            }}>
              ⚡ StudyLite
            </h4>
            <p className="text-white-50 mb-3 fs-6">
              🚀 Empowering creators worldwide with cutting-edge design and video editing courses
            </p>
            <div className="mb-3">
              <p className="text-white mb-2">📞 +1 (555) 123-4567</p>
              <p className="text-white mb-3">✉️ hello@studylite.com</p>
            </div>
            <div className="d-flex">
              {[
                { icon: '📘', gradient: 'linear-gradient(45deg, #4267B2, #6fa8f5)' },
                { icon: '🐦', gradient: 'linear-gradient(45deg, #1DA1F2, #66d9ff)' },
                { icon: '📷', gradient: 'linear-gradient(45deg, #E4405F, #ffad85)' },
                { icon: '🎬', gradient: 'linear-gradient(45deg, #FF0000, #ff6b6b)' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: social.gradient,
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-white">🎯 Quick Links</h6>
            <ul className="list-unstyled">
              {['Courses', 'About', 'Mentors', 'Blog', 'Contact'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white-50 text-decoration-none"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00f5ff';
                      e.target.style.textShadow = '0 0 10px #00f5ff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.5)';
                      e.target.style.textShadow = 'none';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-white">🏢 Company</h6>
            <ul className="list-unstyled">
              {['About Us', 'Our Mission', 'Team', 'Careers', 'Press'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#" 
                    className="text-white-50 text-decoration-none"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ff006e';
                      e.target.style.textShadow = '0 0 10px #ff006e';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.5)';
                      e.target.style.textShadow = 'none';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-white">🛡️ Support</h6>
            <ul className="list-unstyled">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'Refund Policy', 'FAQ'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#" 
                    className="text-white-50 text-decoration-none"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#8338ec';
                      e.target.style.textShadow = '0 0 10px #8338ec';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.5)';
                      e.target.style.textShadow = 'none';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-12 mb-4">
            <h6 className="fw-bold mb-3 text-white">📧 Newsletter</h6>
            <p className="text-white-50 small mb-3">Get the latest updates and exclusive offers!</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control border-0 py-2"
                placeholder="Your email"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <button 
                className="btn border-0 px-3"
                type="button"
                style={{
                  background: 'linear-gradient(45deg, #00f5ff, #ff006e)',
                  color: '#fff'
                }}
              >
                🚀
              </button>
            </div>
          </div>
        </div>
        
        <hr style={{ 
          border: 'none',
          height: '2px',
          background: 'linear-gradient(90deg, #00f5ff, #ff006e, #8338ec, #ffbe0b)',
          margin: '3rem 0 2rem 0'
        }} />
        
        <div className="text-center">
          <p className="text-white-50 mb-0">
            © 2024 <strong style={{color: '#00f5ff'}}>StudyLite</strong>. All rights reserved. 
            <span style={{color: '#ff006e'}}> ⚡ Crafted with passion for creators</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
