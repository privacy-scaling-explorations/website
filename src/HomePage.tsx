import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Discord from './components/Discord';
import Team from './components/Team';
import Footer from './components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Projects />
      <Discord />
      <Team />
      <Footer />
    </div>
  );
}

export default HomePage;
