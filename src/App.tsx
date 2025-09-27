import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Beranda from './pages/Beranda';
import PenambanganData from './pages/PenambanganData';
import SainsData from './pages/SainsData';
import AnalisisData from './pages/AnalisisData';
import Prediksi from './pages/Prediksi';
import Chatbot from './pages/Chatbot';
import Tentang from './pages/Tentang';
import Proyek from './pages/Proyek';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/penambangan-data" element={<PenambanganData />} />
            <Route path="/sains-data" element={<SainsData />} />
            <Route path="/analisis-data" element={<AnalisisData />} />
            <Route path="/proyek" element={<Proyek />} />
            <Route path="/prediksi" element={<Prediksi />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
