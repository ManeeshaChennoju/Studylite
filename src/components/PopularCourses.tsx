
import React from 'react';

interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  students: string;
  price: string;
  originalPrice: string;
  badge?: string;
  gradient: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  image, title, instructor, rating, students, price, originalPrice, badge, gradient 
}) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div 
      className="card h-100 border-0 overflow-hidden position-relative"
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
        {badge && (
          <span 
            className="badge position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold"
            style={{
              background: gradient,
              color: '#fff',
              borderRadius: '15px',
              fontSize: '0.8rem',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            🔥 {badge}
          </span>
        )}
        <div 
          className="position-absolute bottom-0 start-0 w-100 h-50"
          style={{
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))'
          }}
        ></div>
      </div>
      
      <div className="card-body text-white">
        <h6 className="card-title fw-bold mb-3" style={{ 
          color: '#fff',
          fontSize: '1.1rem',
          lineHeight: '1.3'
        }}>
          {title}
        </h6>
        
        <p className="mb-2" style={{ color: '#00f5ff', fontSize: '0.9rem' }}>
          👨‍🏫 By {instructor}
        </p>
        
        <div className="d-flex align-items-center mb-3">
          <span style={{ color: '#ffbe0b', fontSize: '1.1rem' }}>⭐⭐⭐⭐⭐</span>
          <small className="text-white-50 ms-2">{rating} ({students} students)</small>
        </div>
        
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="fw-bold fs-5" style={{ color: '#00f5ff' }}>
              💰 ${price}
            </span>
            <span className="text-decoration-line-through text-white-50 ms-2">
              ${originalPrice}
            </span>
          </div>
          <button 
            className="btn btn-sm px-3 py-2 rounded-pill border-0 fw-bold"
            style={{
              background: gradient,
              color: '#fff',
              fontSize: '0.8rem'
            }}
          >
            🚀 Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PopularCourses: React.FC = () => {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop",
      title: "🎨 Advanced Graphic Design Mastery",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: "2.5k",
      price: "79.99",
      originalPrice: "149.99",
      badge: "BESTSELLER",
      gradient: "linear-gradient(45deg, #ff006e, #8338ec)"
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop",
      title: "🎬 Pro Video Editing with Effects",
      instructor: "Mike Chen",
      rating: 4.8,
      students: "1.8k",
      price: "89.99",
      originalPrice: "179.99",
      badge: "NEW",
      gradient: "linear-gradient(45deg, #00f5ff, #3a86ff)"
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      title: "✨ Motion Graphics & Animation",
      instructor: "Alex Rodriguez",
      rating: 4.9,
      students: "3.2k",
      price: "94.99",
      originalPrice: "189.99",
      badge: "HOT",
      gradient: "linear-gradient(45deg, #ffbe0b, #fb5607)"
    },
    {
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=300&h=200&fit=crop",
      title: "🎯 Brand Identity Design Complete",
      instructor: "Emma Davis",
      rating: 4.7,
      students: "1.9k",
      price: "69.99",
      originalPrice: "139.99",
      gradient: "linear-gradient(45deg, #8338ec, #ff006e)"
    }
  ];

  return (
    <section className="py-5" id="courses" style={{
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ 
            background: 'linear-gradient(45deg, #ff006e, #00f5ff, #8338ec)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            🔥 Trending Courses
          </h2>
          <p className="text-white-50 fs-5">Master the skills that matter in 2024</p>
        </div>
        
        <div className="row">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button 
            className="btn fw-bold px-5 py-3 rounded-pill border-0 fs-5"
            style={{
              background: 'linear-gradient(45deg, #00f5ff, #ff006e, #8338ec)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.5)';
            }}
          >
            🚀 Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
