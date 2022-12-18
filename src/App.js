import './App.css';
// import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import './fonts/Cyberpunk.ttf';
import './fonts/Entanglement-rgpRB.ttf';
import './fonts/FastHand-lgBMV.ttf';
import HomeComponent from './components/HomeComponent';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}

export default App;
