import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Taulukko from './Taulukko';

export default function Laskeutumissivu(props) {
  const vartio = props.vartioData;
  console.log(vartio);
  return (
    <div className="sisalto">
      <div className="tiedot">
        <h2 id='tietokone-hei'>Hei, kiitos ilmoittautumisesta!</h2>
        <Taulukko id={"taulukkot"} vartioData={vartio} />
        </div>
<br />
        <div className="sisaltot">

        <h2>Hei {vartio.vartio}!</h2>
      <p>

      Superii, että olette mukana Hiipivässä Haamussa! Tässä kisakirjeessä on tärkeitä ohjeita kisaan valmistautumiseen.</p>

      <p>Kilpailun lähtö tapahtuu perinteiseen tapaan elokuvateatteri Orionilta osoitteesta Eerikinkatu 15, 00100 Helsinki. Vartionne lähtöaika on klo: <span id='bold'>{vartio.lahtoaika}. </span>
      <br />
      Tulkaa paikalle 15 minuuttia ennen lähtöaikaa.
      </p>
      <h3> Kilpailun ennakkotehtävät</h3>
      <p>
      voi nyt ladata osoitteesta <a id='linkkik' target={'_blank'} href="http://hh.ilvesveikot.fi/" rel="noopener noreferrer">hh.ilvesveikot.fi/tiedostot</a> Täyttäkää sivut siististi käsin tai tietokoneella, tulostakaa kaikki sivut ja nitokaa ne nätiksi nipuksi vasemmasta yläreunasta. Tuokaa tehtävät kisan lähtöön. Varmistakaa, että vartion nimi ja numero on merkitty jokaiselle sivulle. Kisan nettisivuilta löytyy myös kilpailun Ennakkovideo muistakaa katsoa sekin! 
      </p>
      <p>
      Kilpailun pukeutumisteema on Spektaakkeli. Kiehtovaa! Tulkaa lähtöön pukeutuneena kisa-asuihin. Kisa-asuissa ollaan koko kisan ajan, joten niiden kannattaa olla myös sään mukaisia. Muistakaa, että asut arvioidaan ja niistä saa pisteitä kilpailussa. HOX, jätesäkki asuna = 0 pistettä.
      </p>
      <p>
      Vartionne tulee valmistaa kyltti, jossa näkyy selvästi vartionne numero. Koska pukeutumisteema on Spektaakkeli, on vain reilua, että kylttikin on yhtä spektaakkelinomainen kuin kantajansa. Kyltin kirjaimien ja numeroiden on oltava vähintään 19,47 cm korkeita. Lisäksi kyltissä pitää lukea jollakin tapaa ja haluamallanne koolla #Hiippari22, tyyli on vapaa. :D
      </p>
  
      <h3>Ohjeita ja vinkkejä</h3>
          <p>
Kisan nettisivut löytyvät osoitteesta: <a id='linkkik' target={'_blank'} href="http://hh.ilvesveikot.fi/" rel="noopener noreferrer">hh.ilvesveikot.fi</a> Some-seurailuista voi herua lisäpisteitä kisassa…
      </p>

      <a id='linkkik' target={'_blank'} href="https://www.instagram.com/hhaamu/" rel="noopener noreferrer">Instagram</a> 
      <a id='linkkik' target={'_blank'} href="https://www.facebook.com/hhaamu" rel="noopener noreferrer">Facebook</a> 

      
      <p id='varoitus'>
      Kilpailussa otetaan kuvia, joita jaetaan myöhemmin Hiipparin somessa ja netissä. Mikäli vartiosi tai joku vartiostasi ei halua näkyä kuvissa, tulkaa ilmoittautumisen yhteydessä hakemaan “ei saa kuvata” pinssi mukaan asuusi. 
Jos teillä vielä jäi kysyttävää, kerromme mielellämme lisää!
      </p>
      <h3>Mukavaa valmistautumista kisaan!</h3>
        <p id='terveiset'>
        :D
        <br></br>
HH22 johtoryhmä / HH75
<a id='linkkik' target={'_blank'} href="mailto:hiipahaamu@ilvesveikot.fi" rel="noopener noreferrer">hiipahaamu@ilvesveikot.fi</a>
<a id='linkkik' target={'_blank'} href="https://hh.ilvesveikot.fi">hh.ilvesveikot.fi</a>
        </p>

        <Taulukko id={"taulukkot"} vartioData={vartio} />

      </div>

      <button id='tietokonebutton' onClick={() => (window.location.href = `/kirje/${vartio.tilaus}`)}>
        Lataa kirje
      </button>

<br />
<br />
<br />
<br />
<br />
<br />


      <div>
        <Nav />
      </div>
    </div>
  );
}
