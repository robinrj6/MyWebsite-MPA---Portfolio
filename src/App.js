import './App.css';
import './fonts/Cyberpunk.ttf';
import './fonts/Entanglement-rgpRB.ttf';
import './fonts/FastHand-lgBMV.ttf';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import SkillsComponent from './components/SkillsComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/skills' element={<SkillsComponent />} />
        <Route path='/' element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
