import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Discord from './components/Discord';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Usecases from './components/Usecases';
import About from './components/About';
import Footer from './components/Footer';
import How from './components/How';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Usecases />
        <How />
        <Roadmap />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
