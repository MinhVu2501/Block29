import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import PlayerPage from "./PlayerPage.jsx";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:playerId" element={<PlayerPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
