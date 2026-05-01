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

function LandingPage() {
  return (
    <main style={{ backgroundColor: '#2D5644' }}>
      <Navbar />
      
      {/* Hero stays static/sticky as intended, wrapped in its original dark bg */}
      <div style={{ backgroundColor: '#06100B' }}>
        <HeroSection />
      </div>

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <AmenitiesSection />

      <LocationSection />

      <AranyaHighlight />

      <SectionWrapper id="plans">
        <PlanSection />
      </SectionWrapper>

      {/* Video Walkthrough is a scroll-portal, usually best without extra wrapper scale */}
      <VideoWalkthrough />

      <GallerySection />
      
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
