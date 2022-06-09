import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Discord from './components/Discord';
import Team from './components/Team';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Discord />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
