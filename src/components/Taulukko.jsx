import React from 'react';

export default function Taulukko(props)
 {
    const vartio = props.vartioData
  return (
<div class="table-wrapper">
  <table>
  <tr>
  
  </tr>

  <tr>
    <td>Vartion nimi</td>
    <td>Jan - April</td>
    <td>Credit</td>
  </tr>

  <tr>
    <td>Lippukunta</td>
    <td>May - August</td>
    <td>Pass</td>
  </tr>
    
  <tr>
    <td>Vartion numero</td>
    <td>September - December</td>
    <td>Distinction</td>
  </tr>
</table>
</div>



  );
}
