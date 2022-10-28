import React from 'react';
import Nav from './Nav';
import Taulukko from './Taulukko';

export default function kirjew(props) {
  const vartio = props.vartioData;
  console.log(vartio);
  return (
    <div className="sisalto">
      <div className="tiedot">


    <div className='kirje'>


        
    </div>


        <h2>Hei, kiitos ilmoittautumisesta!</h2>

        <Taulukko vartioData={vartio} />
        <br />
        <br />
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
