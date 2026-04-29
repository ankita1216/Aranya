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
import LuxuryDivider from './components/LuxuryDivider'

function App() {
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
      <LuxuryDivider />

      <SectionWrapper id="amenities">
        <AmenitiesSection />
      </SectionWrapper>
      <LuxuryDivider />

      <SectionWrapper id="location">
        <LocationSection />
      </SectionWrapper>
      <LuxuryDivider />

      <SectionWrapper id="plans">
        <PlanSection />
      </SectionWrapper>
      <LuxuryDivider />

      {/* Video Walkthrough is a scroll-portal, usually best without extra wrapper scale */}
      <VideoWalkthrough />
      <LuxuryDivider />

      <SectionWrapper id="gallery">
        <GallerySection />
      </SectionWrapper>
      
      <FooterSection />
    </main>
  )
}

export default App
