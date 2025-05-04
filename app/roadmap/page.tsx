import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Roadmap from '../../components/Roadmap';

export default function RoadmapPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Roadmap />
      <Footer />
    </main>
  );
}