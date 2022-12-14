import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    padding: '1%',
    fontSize: '13px',
    fontFamily: 'Courier'
  },
  view: {
    width: '90%'
  },
  text: {
    width: '100%',
    marginTop: '3%'
  },
  boldText: {
    fontFamily: 'Courier-Bold'
  }
});
export default function Kirje(props) {
  const vartio = props.vartioData;
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.view}>
            <Text>
              Vartio: <Text style={styles.boldText}>{vartio.vartio}</Text>
            </Text>
            <Text>
              Lippukunta: <Text style={styles.boldText}>{vartio.lpk}</Text>
            </Text>
            <Text>
              Kisanumero: <Text style={styles.boldText}>{vartio.vartionro}</Text>
            </Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Hei {vartio.vartio}!</Text>
            <Text style={styles.text}>
            Superii, että olette mukana Hiipivässä Haamussa! Tässä kisakirjeessä on tärkeitä ohjeita kisaan valmistautumiseen.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldFont}>Kilpailun lähtö</Text> tapahtuu perinteiseen tapaan
              elokuvateatteri Orionilta osoitteessa Eerikinkatu 15, 00100 Helsinki. Vartionne lähtöaika on klo
              {vartio.lahtoaika}. Tulkaa paikalle 15 minuuttia ennen lähtöaikaa.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldFont}>Kilpailun ennakkotehtävät</Text> voi ladata
              osoitteesta{' '}
              <Link src="http://hh.ilvesveikot.fi/tiedostot">
                <Text>hh.ilvesveikot.fi/tiedostot</Text>
              </Link>
              . Täyttäkää tehtävän sivut siististi käsin tai tietokoneella, tulostakaa kaikki sivut
              ja nitokaa ne nätiksi nipuksi vasemmasta yläreunasta. Tuokaa tehtävät kisan lähtöön. Varmistakaa vielä, että
              vartion nimi ja numero on merkitty jokaiselle sivulle. Kisan nettisivuilta löytyy myös
              kilpailun{' '}
              <Link src="https://www.youtube.com/watch?v=jqqw1nZ43Vk">
                <Text>ennakkovideo</Text>
              </Link>
              , muistakaa katsoa sekin!
            </Text>
            <Text style={styles.text}>
              Kilpailun <Text style={styles.boldText}>pukeutumisteema</Text> on Spektaakkeli. Kiehtovaa! Tulkaa
              lähtöön pukeutuneena kisa-asuihinne. Kisa-asuissa ollaan koko kisan ajan, joten niiden
              kannattaa olla myös sään mukaisia. Muistakaa, että asut arvioidaan ja niistä saa
              pisteitä kilpailussa. HOX, jätesäkki asuna = 0 pistettä.
            </Text>
            <Text style={styles.text}>
              Vartionne tulee valmistaa <Text style={styles.boldText}>kyltti</Text>, jossa näkyy
              selvästi vartionne numero. Koska pukeutumisteema on Spektaakkeli, on vain reilua, että kylttikin on yhtä spektaakkelinomainen kuin kantajansa.
            KKyltin kirjaimien ja numeroiden on oltava vähintään 19,47 cm korkeita. 
            Lisäksi kyltissä pitää lukea jollakin tapaa ja haluamallanne koolla #Hiippari22, tyyli on vapaa. 

            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Muita ohjeita ja vinkkejä</Text> kisapäivään löytyy
              kisan nettisivuilta:{' '}
              <Link src="https://hh.ilvesveikot.fi">
                <Text>hh.ilvesveikot.fi</Text>
              </Link>
              Muistakaa seurata vartionjohtajan sähköpostia ennen kisaa. Käykää myös kaikki
              kisavartion jäsenet tykkäämässä Hiipparista{' '}
              <Link src="https://www.facebook.com/hiipivahaamu">
                <Text>Facebookissa</Text>
              </Link>{' '}
              sekä seuraamassa kisaa
              <Link src="https://www.instagram.com/hhaamu/">
                <Text>Instagramissa</Text>
              </Link>{' '}
              ja{' '}
              <Link src="https://www.tiktok.com/@hiipivahaamu">
                <Text>Tiktokissa</Text>
              </Link>
              . Some-seurailuista voi herua lisäpisteitä kisassa…
            </Text>
            <Text style={styles.text}>
              Kilpailussa otetaan kuvia, joita jaetaan myöhemmin Hiipparin somessa ja netissä.
              Mikäli vartiosi tai joku vartiostasi ei halua näkyä kuvissa, lähetäthän sähköpostia
              kisanjohdolle. Kirjoita sähköpostiin vartiosi nimi ja numero.
            </Text>
            <Text style={styles.text}>
              Jos teillä vielä jäi kysyttävää, kerromme mielellämme lisää!
            </Text>
            <Text style={styles.text}>Mukavaa valmistautumista kisaan!</Text>
            <Text style={styles.text}>&lt;3</Text>
            <Text>HH22 johtoryhmä</Text>
            <Link src="mailto:hiipivahaamu@ilvesveikot.fi">
              <Text>hiipivahaamu@ilvesveikot.fi</Text>
            </Link>
            <Link src="https://hh.ilvesveikot.fi">
              <Text>hh.ilvesveikot.fi</Text>
            </Link>

   
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
