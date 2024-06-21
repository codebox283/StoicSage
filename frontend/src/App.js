import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewsletterPage from './pages/NewsletterPage'; 
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        </Routes>
    </Router>
  );
}

export default App;
