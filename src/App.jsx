import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import NoPage from './pages/Nopage/NoPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage/>} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
