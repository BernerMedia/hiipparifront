import React from 'react';
import Nav from './Nav';
import Taulukko from './Taulukko';

export default function Laskeutumissivu(props) {
  const vartio = props.vartioData
  return (
    <div>  
   

      <div>
        <Taulukko />
      </div>
      
      <div className="tiedot">
      <h1>Vartion nimi: {vartio.vartio}</h1>
      <h2>{vartio.lpk}</h2>
      <h2>{vartio.vartionro}</h2>
      </div>

      <button onClick={() => (window.location.href = `/kirje/${vartio.tilaus}`)}>
        Lataa kirje
      </button>

         <div>
        <Nav />
      </div>
    </div>
  );
}
