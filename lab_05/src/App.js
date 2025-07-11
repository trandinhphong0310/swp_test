import './App.css';
import { Provider } from 'react-redux';
import Quiz from './Quiz';
import QuizReview from './quizReview';
import { store } from './store/configureStore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/review" element={<QuizReview/>}/>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
