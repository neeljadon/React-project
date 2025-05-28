import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResellerPage from './Reseller';
import Iphone11 from './Iphone11';
import Iphone12 from './Iphone12';
import Iphone13 from './Iphone13';
import Iphone14 from './Iphone14';
import Iphone15 from './Iphone15';
import Iphone16 from './Iphone16';
import Ipad from './Ipad';
import Macbook from './Macbook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResellerPage />} />
        <Route path="/Iphone11" element={<Iphone11 />} />
        <Route path="/Iphone12" element={<Iphone12 />} />
        <Route path="/Iphone13" element={<Iphone13 />} />
        <Route path="/Iphone14" element={<Iphone14 />} />
        <Route path="/Iphone15" element={<Iphone15 />} />
        <Route path="/Iphone16" element={<Iphone16 />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Macbook" element={<Macbook />} />
      </Routes>
    </Router>
  );
}

export default App;
