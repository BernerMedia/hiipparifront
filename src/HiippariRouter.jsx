import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laskeutumissivu from './components/Laskeutumissivu';

import variables from './utils/variables';

export default function HiippariRouter() {
  const [vartiot, setVartiot] = useState([]);

  useEffect(() => {
    axios
      .get(variables.baseUrl.concat('/kaikki'))
      .then((response) => setVartiot(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Laskeutumissivu />} />
        {vartiot.map((vartio, i) => {
          return (
            <Route
              key={i}
              path={`/${vartio.lpk_lyhenne}/${vartio.tilaus}`}
              element={<Laskeutumissivu vartioData={vartio} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
