
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ></script>
      
      <nav className="navbar navbar-expand-lg fixed-top" style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid #00f5ff',
        boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{ 
            color: '#00f5ff',
            textShadow: '0 0 20px #00f5ff',
            fontFamily: 'Arial Black, sans-serif'
          }}>
            ⚡ StudyLite
          </a>
          
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#00f5ff' }}
          >
            <span style={{ color: '#00f5ff', fontSize: '1.5rem' }}>☰</span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#courses" style={{ 
                  color: '#fff', 
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }} 
                onMouseEnter={(e) => {
                  e.target.style.color = '#ff006e';
                  e.target.style.textShadow = '0 0 15px #ff006e';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                }}>
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#about" style={{ 
                  color: '#fff', 
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#8338ec';
                  e.target.style.textShadow = '0 0 15px #8338ec';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#mentors" style={{ 
                  color: '#fff', 
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffbe0b';
                  e.target.style.textShadow = '0 0 15px #ffbe0b';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                }}>
                  Mentors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#blog" style={{ 
                  color: '#fff', 
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fb5607';
                  e.target.style.textShadow = '0 0 15px #fb5607';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                }}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#contact" style={{ 
                  color: '#fff', 
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#3a86ff';
                  e.target.style.textShadow = '0 0 15px #3a86ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                }}>
                  Contact
                </a>
              </li>
            </ul>
            
            <div className="d-flex">
              <button 
                className="btn fw-bold px-4 py-2 rounded-pill border-0" 
                style={{
                  background: 'linear-gradient(45deg, #ff006e, #8338ec)',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.5)';
                }}
              >
                🚀 Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
