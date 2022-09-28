import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Usecases from './components/Usecases';
import About from './components/About';
import Footer from './components/Footer';
import How from './components/How';
import Pagesigner from './components/Pagesigner';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Usecases />
        <How />
        <Roadmap />
        <Pagesigner />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
