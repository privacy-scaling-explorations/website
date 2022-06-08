import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Footer from './components/Footer';
import './TeamPage.css';

function TeamPage() {
  return (
    <div className="container-sm">
      <Hero />
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}

export default TeamPage;
