import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import './fonts/Cyberpunk.ttf';
import './fonts/Entanglement-rgpRB.ttf';
import './fonts/FastHand-lgBMV.ttf';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      
      <NavbarComponent/>
      <Routes>
        <Route path='/'
        element={<HomeComponent/>}
        />
        <Route path='/home'
        element={<HomeComponent/>}
        />
        <Route path='/skills'
        // element={<HomeComponent/>}
        />
        <Route path='/projects'
        // element={<HomeComponent/>}
        />
        <Route path='/about'
        // element={<HomeComponent/>}
        />
        <Route path='/contact'
        // element={<HomeComponent/>}
        />
      </Routes>
    </div>
  );
}

export default App;
