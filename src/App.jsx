import { Routes, Route } from 'react-router-dom'
import ThankYou from './components/ThankYou'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AmenitiesSection from './components/AmenitiesSection'
import LocationSection from './components/LocationSection'
import PlanSection from './components/PlanSection'
import VideoWalkthrough from './components/VideoWalkthrough'
import GallerySection from './components/GallerySection'
import FooterSection from './components/FooterSection'
import SectionWrapper from './components/SectionWrapper'
import AranyaHighlight from './components/AranyaHighlight'

import { useState, useEffect, useRef } from 'react'

function LandingPage() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const walkthroughRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderHidden(entry.isIntersecting);
      },
      { threshold: 0.1 } // Hide when at least 10% of walkthrough is visible
    );

    if (walkthroughRef.current) {
      observer.observe(walkthroughRef.current);
    }

    return () => {
      if (walkthroughRef.current) {
        observer.unobserve(walkthroughRef.current);
      }
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#2D5644' }}>
      <Navbar isHidden={isHeaderHidden} />
      
      {/* Hero stays static/sticky as intended, wrapped in its original dark bg */}
      <div style={{ backgroundColor: '#06100B' }}>
        <HeroSection />
      </div>

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <AmenitiesSection />
      
      <div ref={walkthroughRef}>
        <VideoWalkthrough />
      </div>

      <GallerySection />

      <PlanSection />

      <AranyaHighlight />

      <LocationSection />
      
      <FooterSection />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App
