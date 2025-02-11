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
  const [timerKey, setTimerKey] = useState(0);

  const resetTimer = () => {
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 z-30 w-full bg-black p-4 text-center text-2xl font-bold">
          InstaBlam
        </header>

        {/* Fixed Timer just below the header */}
        <div className="fixed top-[64px] left-0 z-40 w-full bg-gray-900">
          <Timer key={timerKey} />
        </div>

        {/* Content Container with top padding to offset the fixed header and timer */}
        <div className="w-full pt-[112px] p-4">
          <Attempts attempts={attempts} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/profile/:id"
              element={<ProfilePage resetTimer={resetTimer} />}
            />
            <Route
              path="/login/:id"
              element={<Login setAttempts={setAttempts} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
