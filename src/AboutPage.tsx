import Starter from './components/Starter';
import Navbar from './components/Navbar';
import AboutCard from './components/AboutCard';
import Footer from './components/Footer';
import './TeamPage.css';

function AboutPage() {
  return (
    <div className="container-sm">
      <Starter />
      <Navbar />
      <AboutCard />
      <Footer />
    </div>
  );
}

export default AboutPage;
