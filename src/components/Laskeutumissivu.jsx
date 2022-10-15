import React from 'react';

export default function Laskeutumissivu(props) {
  const vartio = props.vartioData
  return (
    <div>
      
      <nav className='navi'>
        <li><a href="#">Etusivu</a></li>
        <li><a href="#">Tietoa kisasta</a></li>
        <li><a href="#">Seuraa somessa!</a></li>
      </nav>
      <h1>Vartion nimi: {vartio.vartio}</h1>
      <h2>{vartio.lpk}</h2>
      <h2>{vartio.vartionro}</h2>
      <button onClick={() => (window.location.href = `/kirje/${vartio.tilaus}`)}>
        Lataa kirje
      </button>
    </div>
  );
}
