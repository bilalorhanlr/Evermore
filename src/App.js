import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes kullanıldı
import Header from './components/header/Header';
import Login from './pages/login/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto p-4 pt-32">
          <Routes> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/" element={<h1>Merhaba, React uygulamama hoş geldiniz!</h1>} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
