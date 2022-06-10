import { Route, Routes } from 'react-router-dom';
import './App.css';
import AutoParts from './components/AllProjects/AutoParts';
import SportsZone from './components/AllProjects/SportsZone';
import EduPhilip from './components/AllProjects/EduPhilip';
import Home from './components/Home';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/autoParts' element={<AutoParts />}></Route>
        <Route path='/sportsZone' element={<SportsZone />}></Route>
        <Route path='/eduPhilip' element={<EduPhilip />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
