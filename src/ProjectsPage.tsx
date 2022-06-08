import Starter from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="Home container-sm">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default HomePage;
