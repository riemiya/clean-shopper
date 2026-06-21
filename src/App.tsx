import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSession } from './hooks/useSession';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
  const sessionId = useSession();

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
