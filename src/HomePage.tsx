import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default HomePage;
