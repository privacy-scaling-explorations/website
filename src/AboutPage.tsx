import Starter from './components/Starter';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import './TeamPage.css';

function AboutPage() {
  return (
    <div className="container-sm">
      <Starter />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
