import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Discovery from './pages/Discovery'; 
import BlogsPage from './pages/BlogsPage'; 
import Home from './pages/Home';
import './App.css';
import BlogPage from './pages/BlogPage';
import DiscoverPage from './pages/DiscoverPage';
import ScrollToTop from './components/ScrollToTop';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discovery />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogPage/:index" element={<BlogPage />} />
        <Route path="/discoverPage/:index" element={<DiscoverPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );

}

export default App;
