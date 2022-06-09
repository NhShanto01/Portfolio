import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Projects/Portfolio';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Header';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
