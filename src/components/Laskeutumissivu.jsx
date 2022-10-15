import React from 'react';

export default function Laskeutumissivu(props) {
  return (
    <div>
      <h1>{props.vartioData.vartio}</h1>
      <button onClick={() => (window.location.href = `/kirje/${props.vartioData.tilaus}`)}>
        Lataa kirje
      </button>
    </div>
  );
}
