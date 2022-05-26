import Starter from './components/Starter';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './HomePage.css';

function HomePage() {
  return (
      <div className="Home container-sm">
        <Starter />
        <Navbar />
        <Projects />
        <Footer />
      </div>
  );
}

export default HomePage;
