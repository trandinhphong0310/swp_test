import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './Container';
import Contact from './Contact';
import Detail from './Detail';
import reportWebVitals from './reportWebVitals';
import Natural from './Natural';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/naturals">Naturals</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About/>} />
        <Route path="/naturals" element={<Natural/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
