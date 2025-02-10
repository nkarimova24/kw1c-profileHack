import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center p-4">
        <header className="w-full bg-blue-600 p-4 text-center text-xl font-bold text-white">
          Fakebook
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login/:id" element={<Login />} />
        </Routes>
        <div className="mt-6">
          <h2 className="text-lg font-bold">Kies een profiel om te hacken:</h2>
          <Link to="/profile/ayaan-hassan" className="block bg-blue-500 p-2 mt-2 rounded-lg text-white hover:bg-blue-400">
            Ayaan Hassan
          </Link>
          <Link to="/profile/emma-van-dijk" className="block bg-blue-500 p-2 mt-2 rounded-lg text-white hover:bg-blue-400">
            Emma van Dijk
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
