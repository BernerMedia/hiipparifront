import './App.css';
import HiippariRouter from './HiippariRouter';

function App() {
  return (
    <div className="App">
    <div className="hello">    <h1>Hei kisaaja!</h1>
      <p>Vartionjohtaja on saanut sähköpostiinsa vartionne oman linkin, jolla pääsette lukemaan kisakirjeen ja teidän vartiokohtaiset tiedot</p>

      <button id='etusivub'> <a target={'_blank'} href="https://hh.ilvesveikot.fi/">Hiipparin etusivulle</a></button>
     </div>
   <HiippariRouter />
    </div>
  );
}

export default App;
