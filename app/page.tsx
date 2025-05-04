import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/DeviceMockup';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
      {/* <Testimonials /> */}
      {/* <Installation /> */}
    </main>
  );
}
