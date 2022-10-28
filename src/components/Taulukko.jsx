import React from 'react';

export default function Taulukko({vartioData, id}) {
  return (
    <div id={id} className="table-container">
      <table className="taulukko">
        <tbody>
          <tr></tr>

          <tr>
            <td>Vartion nimi</td>
            <td>{vartioData.vartio}</td>
          </tr>

          <tr>
            <td>Lippukunta</td>
            <td>{vartioData.lpk}</td>
          </tr>

          <tr>
            <td>Vartion numero</td>
            <td>{vartioData.vartionro}</td>
          </tr>

          <tr>
            <td>Lähtöaika</td>
            <td>{vartioData.lahtoaika}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
