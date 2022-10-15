import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    width: '100%'
  }
});

export default function Kirje(props) {
  return (
    <PDFViewer style={{ width: '75%', height: '400px' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text>Vartio: {props.vartioData.vartio}</Text>
            <Text>Lippukunta: {props.vartioData.lpk}</Text>
          </View>
          <View>
            <Text>Hieno kirje</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
