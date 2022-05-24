import EthLogo from './components/EthLogo';
import Starter from './components/Starter';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App container-sm">
      <EthLogo />
      <Starter />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
