import EthLogo from './components/EthLogo';
import Starter from './components/Starter';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './Home.css';

function Home() {

  return (
    <div className="Home container-sm">
      <EthLogo />
      <Starter />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
