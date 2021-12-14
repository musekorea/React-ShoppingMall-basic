import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.js';
import DetailPage from './pages/DetailPage.js';
import fakeDB from './db/fakeDB.js';

function App() {
  const [prods, setProds] = useState(fakeDB);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage prods={prods} />}></Route>
          <Route
            path="/detail/:params"
            element={<DetailPage prods={prods} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
