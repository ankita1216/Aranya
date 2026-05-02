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
const PhotoSection = lazy(() => import('./components/PhotoSection'))
const GallerySection = lazy(() => import('./components/GallerySection'))
const FooterSection = lazy(() => import('./components/FooterSection'))
const AranyaHighlight = lazy(() => import('./components/AranyaHighlight'))
const LeadModal = lazy(() => import('./components/LeadModal'))
const BottomEnquiryForm = lazy(() => import('./components/BottomEnquiryForm'))
const ThankYou = lazy(() => import('./components/ThankYou'))

const Loader = () => (
  <div className="h-screen w-full bg-[#407266] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
  </div>
);

function LandingPage() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const [hasScrolledForEnquiry, setHasScrolledForEnquiry] = useState(false);
  const [isTimeElapsed, setIsTimeElapsed] = useState(false);
  const walkthroughRef = useRef(null);
  const quoteRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderHidden(entry.isIntersecting);
      },
      { threshold: 0.1 } // Hide when at least 10% of walkthrough is visible
    );

    const walkthroughNode = walkthroughRef.current;

    if (walkthroughNode) {
      observer.observe(walkthroughNode);
    }

    return () => {
      if (walkthroughNode) {
        observer.unobserve(walkthroughNode);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsQuoteVisible(entry.isIntersecting);
      },
      { threshold: 0.18 }
    );

    const quoteNode = quoteRef.current;

    if (quoteNode) {
      observer.observe(quoteNode);
    }

    return () => {
      if (quoteNode) {
        observer.unobserve(quoteNode);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolledForEnquiry(window.scrollY > window.innerHeight * 0.75);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.08 }
    );

    const footerNode = footerRef.current;

    if (footerNode) {
      observer.observe(footerNode);
    }

    return () => {
      if (footerNode) {
        observer.unobserve(footerNode);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      setIsTimeElapsed(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full max-w-full overflow-x-hidden" style={{ backgroundColor: '#407266' }}>
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

        <PhotoSection />

        <div ref={quoteRef}>
          <AranyaHighlight />
        </div>

        <LocationSection />
        
        <div ref={footerRef}>
          <FooterSection />
        </div>
        
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <BottomEnquiryForm isVisible={isTimeElapsed && hasScrolledForEnquiry && !isQuoteVisible && !isFooterVisible && !isModalOpen} />
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
