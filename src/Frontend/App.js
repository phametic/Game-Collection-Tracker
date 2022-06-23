import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home.js';
import DataProvider from './common/APIUtils.js';
import Navbar from './Components/Navbar/Navbar.js';
import GamePage from './Components/Game Page/GamePage.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<GamePage />}/>
        </Routes>
        
    </div>
  );
}

export default App;

{/* <DataProvider>
        <Navbar />
        <Home />
      </DataProvider> */}