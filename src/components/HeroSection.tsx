
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 25%, #21262d 50%, #30363d 75%, #161b22 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '90px'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255, 0, 110, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse'
      }}></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px #00f5ff, 0 0 30px #00f5ff, 0 0 40px #00f5ff; }
          50% { text-shadow: 0 0 30px #ff006e, 0 0 40px #ff006e, 0 0 50px #ff006e; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 0, 110, 0.8); }
        }
      `}</style>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className='w-100'>
              <h4 className="display-5 fw-bold mb-4 h4" style={{
                background: 'linear-gradient(45deg, #00f5ff, #ff006e, #8338ec, #ffbe0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}>
                Master Creative & Trading Skills
              </h4>
            </div>

            <h2 className="h3 mb-4" style={{
              color: '#fff',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}>
              Transform ✨ Your Future with Professional Design & Crypto Trading Expertise
            </h2>

            <p className="lead mb-4" style={{
              color: '#b3b3b3',
              fontSize: '1.2rem'
            }}>
              🚀 Join thousands of students mastering <strong style={{ color: '#00f5ff' }}>Graphic Design</strong> and <strong style={{ color: '#00f5ff' }}>Crypto Trading</strong> with our comprehensive courses. Learn industry-standard design techniques and proven trading strategies that generate real results.
              {/* 🚀 Join thousands of creators mastering <strong style={{color: '#00f5ff'}}>Graphic Design</strong> , <strong style={{color: '#ff006e'}}>Crypto Trading</strong> with our cutting-edge courses */}
            </p>

            <div className="mb-4">
              <div className="input-group mb-3" style={{ maxWidth: '500px' }}>
                <input
                  type="email"
                  className="form-control py-3 border-0 rounded-start-pill"
                  placeholder="✉️ Enter your email for magic..."
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    backdropFilter: 'blur(10px)',
                    fontSize: '1.1rem'
                  }}
                />
                <button
                  className="btn fw-bold px-4 rounded-end-pill border-0"
                  type="button"
                  style={{
                    background: 'linear-gradient(45deg, #00f5ff, #8338ec)',
                    color: '#fff',
                    fontSize: '1.1rem',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  🎯 Get Course Demo
                </button>
              </div>
              {/* <small style={{ color: '#00f5ff', fontSize: '1rem' }}>
                ⚡ <strong>14 days free</strong> • No credit card required • Cancel anytime
              </small> */}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="position-relative text-center">
              <div
                className="mx-auto position-relative overflow-hidden"
                style={{
                  width: '400px',
                  height: '400px',
                  background: 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #00f5ff 100%)',
                  borderRadius: '50%',
                  padding: '5px',
                  boxShadow: '0 0 50px rgba(0, 245, 255, 0.5)',
                  // animation: 'float 10s ease-in-out infinite'
                }}
              >
                <div
                  className="w-100 h-100 rounded-circle overflow-hidden position-relative"
                  style={{ background: '#1a1a1a' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=faces"
                    alt="Creative student learning"
                    className="w-100 h-100 object-fit-cover"
                    style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                  />
                </div>
              </div>

              {/* Floating neon cards */}
              <div
                className="position-absolute p-3 rounded-3"
                style={{
                  top: '15%',
                  right: '5%',
                  background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.9), rgba(131, 56, 236, 0.9))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(0, 245, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 245, 255, 0.3)',
                  // animation: 'float 2s ease-in-out infinite'
                }}
              >
                <div className="fw-bold text-white fs-4">🎯 99.2%</div>
                <div className="text-white-50">Success Rate</div>
              </div>

              <div
                className="position-absolute p-3 rounded-3"
                style={{
                  bottom: '25%',
                  left: '5%',
                  background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.9), rgba(255, 190, 11, 0.9))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 0, 110, 0.3)',
                  boxShadow: '0 8px 32px rgba(255, 0, 110, 0.3)',
                  // animation: 'float 2.5s ease-in-out infinite reverse'
                }}
              >
                <div className="fw-bold text-white fs-4">⭐ 4.9</div>
                <div className="text-white-50">Course Rating</div>
              </div>

              <div
                className="position-absolute p-3 rounded-3"
                style={{
                  top: '60%',
                  right: '20%',
                  background: 'linear-gradient(135deg, rgba(251, 86, 7, 0.9), rgba(58, 134, 255, 0.9))',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(251, 86, 7, 0.3)',
                  boxShadow: '0 8px 32px rgba(251, 86, 7, 0.3)',
                  // animation: 'float 3s ease-in-out infinite'
                }}
              >
                <div className="fw-bold text-white fs-4">🚀 1k+</div>
                <div className="text-white-50">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
