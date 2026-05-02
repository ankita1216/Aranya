import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useRef, lazy, Suspense } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SectionWrapper from './components/SectionWrapper'

// Lazy load sections below the fold
const AboutSection = lazy(() => import('./components/AboutSection'))
const AmenitiesSection = lazy(() => import('./components/AmenitiesSection'))
const LocationSection = lazy(() => import('./components/LocationSection'))
const PlanSection = lazy(() => import('./components/PlanSection'))
const VideoWalkthrough = lazy(() => import('./components/VideoWalkthrough'))
const GallerySection = lazy(() => import('./components/GallerySection'))
const FooterSection = lazy(() => import('./components/FooterSection'))
const AranyaHighlight = lazy(() => import('./components/AranyaHighlight'))
const LeadModal = lazy(() => import('./components/LeadModal'))
const ThankYou = lazy(() => import('./components/ThankYou'))

const Loader = () => (
  <div className="h-screen w-full bg-[#407266] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
  </div>
);

function LandingPage() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <main style={{ backgroundColor: '#407266' }}>
      <Navbar isHidden={isHeaderHidden} onOpenModal={() => setIsModalOpen(true)} />
      
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />

      <Suspense fallback={<div className="h-96 bg-[#407266]" />}>
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
        
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Suspense>
  );
}

export default App
