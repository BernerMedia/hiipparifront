import React from 'react';

export default function Taulukko(props) {
  const vartio = props.vartioData;
  return (
    <div className="table-container">
      <table className="taulukko">
        <tbody>
          <tr></tr>

          <tr>
            <td>Vartion nimi</td>
            <td>{vartio.vartio}</td>
          </tr>

          <tr>
            <td>Lippukunta</td>
            <td>{vartio.lpk}</td>
          </tr>

          <tr>
            <td>Vartion numero</td>
            <td>{vartio.vartionro}</td>
          </tr>

          <tr>
            <td>Lähtöaika</td>
            <td>{vartio.lahtoaika}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
