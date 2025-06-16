
import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
  icon: string;
  gradient: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, icon, gradient }) => (
  <div className="col-6 col-md-3 text-center mb-4">
    <div 
      className="p-4 rounded-4 h-100 position-relative overflow-hidden"
      style={{
        background: gradient,
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      }}
    >
      <div className="fs-1 mb-2">{icon}</div>
      <h3 className="fw-bold mb-2 text-white" style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
      }}>
        {number}
      </h3>
      <p className="text-white-50 mb-0 fw-semibold">{label}</p>
    </div>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #161b22 0%, #0d1117 50%, #21262d 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #00f5ff, #ff006e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            ⚡ Our Amazing Stats
          </h2>
          <p className="text-white-50 fs-5">Numbers that speak our success story</p>
        </div>
        
        <div className="row">
          <StatItem 
            number="15k+" 
            label="Creative Graduates" 
            icon="🎓"
            gradient="linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(131, 56, 236, 0.2))"
          />
          <StatItem 
            number="5+" 
            label="Years of Innovation" 
            icon="🚀"
            gradient="linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(255, 190, 11, 0.2))"
          />
          <StatItem 
            number="500+" 
            label="Industry Awards" 
            icon="🏆"
            gradient="linear-gradient(135deg, rgba(251, 86, 7, 0.2), rgba(58, 134, 255, 0.2))"
          />
          <StatItem 
            number="50+" 
            label="Tech Partners" 
            icon="🤝"
            gradient="linear-gradient(135deg, rgba(131, 56, 236, 0.2), rgba(0, 245, 255, 0.2))"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
