import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Timer from "./components/Timer";
import Attempts from "./components/Attempts";
import "./index.css";

function App() {
  const [attempts, setAttempts] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center p-4">
        <header className="w-full bg-blue-600 p-4 text-center text-xl font-bold text-white">
          Fakebook
        </header>
        <Timer />
        <Attempts attempts={attempts} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/login/:id" element={<Login setAttempts={setAttempts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
