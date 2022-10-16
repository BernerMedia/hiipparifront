import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    padding: '1%',
    fontSize: '13px'
  },
  view: {
    width: '90%'
  },
  text: {
    width: '100%',
    marginTop: '3%'
  }
});
export default function Kirje(props) {
  const vartio = props.vartioData;
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.view}>
            <Text>Vartio: {vartio.vartio}</Text>
            <Text>Lippukunta: {vartio.lpk}</Text>
            <Text>Kisanumero: {vartio.vartionro}</Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Hei {vartio.vartio}!</Text>
            <Text style={styles.text}>
              Mahtavaa, että olette mukana Hiipivässä Haamussa! Tässä kisakirjeessä on tärkeitä
              ohjeita kisaan valmistautumiseen.
            </Text>
            <Text style={styles.text}>
              Kilpailun lähtö tapahtuu perinteiseen tapaan elokuvateatteri Orionilta osoitteessa
              Eerikinkatu 15. Vartionne lähtöaika on klo «Lähtöaika». Tulkaa paikalle 15 minuuttia
              ennen lähtöaikaa.
            </Text>
            <Text style={styles.text}>
              Kilpailun ennakkotehtävät voitte ladata osoitteesta{' '}
              <Link src="http://hh.ilvesveikot.fi/tiedostot">
                <Text>hh.ilvesveikot.fi/tiedostot</Text>
              </Link>
              . Täyttäkää tehtävän sivut siististi käsin tai tietokoneella, tulostakaa kaikki sivut
              ja nitokaa ne nätiksi nipuksi. Tuokaa tehtävät kisan lähtöön. Varmistakaa vielä, että
              vartion nimi ja numero on merkitty jokaiselle sivulle. Kisan nettisivuilta löytyy myös
              kilpailun{' '}
              <Link src="https://youtu.be/Fw33UvpPiFE">
                <Text>ennakkovideo</Text>
              </Link>
              , muistakaa katsoa sekin!
            </Text>
            <Text style={styles.text}>
              Kilpailun pukeutumisteema on hirviö. Tulkaa lähtöön pukeutuneena kisa-asuihinne.
              Kisa-asuissa ollaan koko kisan ajan, joten niiden kannattaa olla myös sään mukaisia.
              Muistakaa, että asut arvioidaan ja niistä saa pisteitä kilpailussa. Jep, jätesäkki
              asuna = 0 pistettä.
            </Text>
            <Text style={styles.text}>
              Vartionne tulee valmistaa kyltti, jossa näkyy selvästi vartionne numero. Koska
              pukeutumisteema on hirviö, on reilua, että sitä tasapainotetaan mahdollisimman
              kauniisti koristellulla kyltillä. Kyltin kirjaimen ja numeroiden on oltava vähintään
              19,47 cm korkeita. Lisäksi kyltissä pitää lukea jollakin tapaa ja haluamallanne koolla
              #Hiippari22, tyyli on vapaa.
            </Text>
            <Text style={styles.text}>
              Muita ohjeita ja vinkkejä kisapäivään löytyy kisan nettisivuilta:{' '}
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
            <Text style={styles.text}>&lt;3 hh.ilvesveikot.fi</Text>
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
