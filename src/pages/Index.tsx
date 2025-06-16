
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PopularCourses from '../components/PopularCourses';
import InstructorsSection from '../components/InstructorsSection';
import TopCategories from '../components/TopCategories';
import MentorsSection from '../components/MentorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
      minHeight: '100vh'
    }}>
      <Header />
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <InstructorsSection />
      <TopCategories />
      <MentorsSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
