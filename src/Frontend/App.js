import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home Page/Home.js';
import DataProvider from './common/APIUtils.js';
import Navbar from './Components/Navbar/Navbar.js';
import GamePage from './Components/Game Page/GamePage.js';
import SearchPage from './Components/Search Bar/SearchPage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<GamePage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/add/:gameId"/>
        </Routes>
        
    </div>
  );
}

export default App;