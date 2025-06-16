
import React from 'react';

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, date, readTime, category, gradient }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div 
      className="card h-100 border-0 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
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
      <div className="position-relative">
        <img 
          src={image} 
          className="card-img-top" 
          alt={title} 
          style={{ 
            height: '200px', 
            objectFit: 'cover',
            filter: 'brightness(1.1) contrast(1.1)'
          }} 
        />
        <div 
          className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill fw-bold"
          style={{
            background: gradient,
            color: '#fff',
            fontSize: '0.8rem'
          }}
        >
          {category}
        </div>
        <div 
          className="position-absolute bottom-0 start-0 w-100 h-50"
          style={{
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))'
          }}
        ></div>
      </div>
      
      <div className="card-body text-white p-4">
        <h6 className="card-title fw-bold mb-3" style={{ 
          color: '#fff',
          fontSize: '1.1rem',
          lineHeight: '1.4'
        }}>
          {title}
        </h6>
        
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span style={{ color: '#00f5ff', fontSize: '0.9rem' }}>📅 {date}</span>
          </div>
          <div className="d-flex align-items-center">
            <span style={{ color: '#ff006e', fontSize: '0.9rem' }}>⏱️ {readTime}</span>
          </div>
        </div>
        
        <button 
          className="btn btn-sm w-100 mt-3 py-2 rounded-pill border-0 fw-bold"
          style={{
            background: gradient,
            color: '#fff',
            fontSize: '0.9rem'
          }}
        >
          📖 Read More
        </button>
      </div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const blogs = [
    {
      title: "🚀 The Future of Creative Design: AI Tools Every Designer Should Know",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Design Trends",
      gradient: "linear-gradient(45deg, #ff006e, #8338ec)"
    },
    {
      title: "🎬 Video Editing Mastery: 10 Pro Tips That Will Transform Your Content",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Video Tips",
      gradient: "linear-gradient(45deg, #00f5ff, #3a86ff)"
    },
    {
      title: "💰 From Zero to Hero: How to Build a Profitable Design Career in 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Career Growth",
      gradient: "linear-gradient(45deg, #ffbe0b, #fb5607)"
    }
  ];

  return (
    <section className="py-5" id="blog" style={{
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #fb5607, #ffbe0b, #00f5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            📚 Latest Insights & Tips
          </h2>
          <p className="text-white-50 fs-5">Stay ahead with expert knowledge and industry trends</p>
        </div>
        
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-white-50 mb-4">📖 Want more creative insights?</p>
          <button 
            className="btn fw-bold px-5 py-3 rounded-pill border-0 fs-5"
            style={{
              background: 'linear-gradient(45deg, #ffbe0b, #ff006e, #00f5ff)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(255, 190, 11, 0.5)'
            }}
          >
            🚀 Explore All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
