import Starter from './components/Starter';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Footer from './components/Footer';
import './TeamPage.css';

function TeamPage() {
  return (
    <div className="container-sm">
      <Starter />
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
}

export default TeamPage;
