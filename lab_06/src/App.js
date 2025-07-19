import {BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Update from "./pages/Update"
import Create from "./pages/Create"
import Detail from './pages/Detail'
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
