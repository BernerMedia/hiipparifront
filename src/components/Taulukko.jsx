import React from 'react';

export default function Taulukko(props) {
  const vartio = props.vartioData;
  return (
    <div>
      <table>
        <tbody>
          <tr></tr>

          <tr>
            <td>Vartion nimi</td>
            <td>Liskokissat</td>
          </tr>

          <tr>
            <td>Lippukunta</td>
            <td>Puskapartiolaiset</td>
          </tr>

          <tr>
            <td>Vartion numero</td>
            <td>1340</td>
          </tr>

          <tr>
            <td>Lähtöaika</td>
            <td>8:10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
