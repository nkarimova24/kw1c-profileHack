import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage"; 
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Timer from "./components/Timer";
import Attempts from "./components/Attempts";
import "./index.css";

//handles layout and conditional timer rendering
function AppContent({ timerKey, resetTimer, attempts, setAttempts }) {
  const location = useLocation();
  const showTimer =
    location.pathname.startsWith("/profile/") ||
    location.pathname.startsWith("/login/");

  return (
    <>
      <header className="fixed top-0 left-0 z-30 w-full bg-gradient-to-r from-black via-purple-700 p-4 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-white">
          InstaBlam
        </h1>
        <p className="text-xs md:text-sm text-gray-200 mt-1">
          Your socials online
        </p>
      </header>

      {/*render the timer if on a profile or login page */}
      {showTimer && (
        <div className="fixed top-[64px] left-0 z-40 w-full bg-gray-900">
          <Timer key={timerKey} />
        </div>
      )}

      {/*timer visibility */}
      <div className={`w-full p-4 ${showTimer ? "pt-[112px]" : "pt-[64px]"}`}>
        <Attempts attempts={attempts} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile/:id"
            element={<ProfilePage resetTimer={resetTimer} />}
          />
          <Route
            path="/login/:id"
            element={<LoginPage setAttempts={setAttempts} />}
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  const [attempts, setAttempts] = useState([]);
  const [timerKey, setTimerKey] = useState(0);

  const resetTimer = () => {
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        <AppContent
          timerKey={timerKey}
          resetTimer={resetTimer}
          attempts={attempts}
          setAttempts={setAttempts}
        />
      </div>
    </Router>
  );
}

export default App;
