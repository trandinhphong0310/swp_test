import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllBookPage from './pages/AllBookPage';
import Navbar from './components/Navbar';
import ReadingBookPage from './pages/ReadingBookPage';
import UnReadBookPage from './pages/UnReadBookPage';
import BookDetailPage from './pages/BookDetailPage';
import UpdateBook from './components/UpdateBook';
import CreateBookPage from './pages/CreateBookPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/PhongTD123456/AllBooks" element={<AllBookPage/>} />
          <Route path="/reading-book" element={<ReadingBookPage />} />
          <Route path="/PhongTD123456/UnReadBooks" element={<UnReadBookPage />} />
          <Route path="/create-book" element={<CreateBookPage/>} />
          <Route path="/detail-book/:id" element={<BookDetailPage/>} />
          <Route path="/update-book/:id" element={<UpdateBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
