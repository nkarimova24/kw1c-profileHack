import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Welkom op Fakebook</h1>
      <p className="mt-4">Bekijk het profiel en ontdek meer.</p>
      <Link to="/profile" className="mt-6 block bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-400">
        Bekijk Profiel
      </Link>
    </div>
  );
}

function Profile() {
  return (
    <div className="text-center mt-10 bg-white p-6 rounded-lg shadow-lg w-96">
      <img
        src="https://via.placeholder.com/150"
        alt="Profiel Foto"
        className="rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold mt-4">Ayaan Hassan</h2>
      <p className="text-gray-600">Amsterdam, Nederland</p>
      <p className="mt-4">Hobby's: Fotografie, reizen, programmeren</p>
      <h3 className="text-lg font-bold mt-6">Posts</h3>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p><strong>Ayaan:</strong> Mooie dag om wat foto's te maken! 📸</p>
      </div>
      <div className="mt-2 p-4 bg-gray-200 rounded-lg">
        <p><strong>Ayaan:</strong> Ik heb een nieuwe kat, Noor! 🐱</p>
      </div>
      <Link to="/login" className="mt-6 block bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-400">
        Probeer in te loggen
      </Link>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    if (username === "admin" && password === "NoorFoto1990") {
      setMessage("Gefeliciteerd! Je hebt het profiel gehackt.");
    } else {
      setMessage("Onjuiste login. Probeer opnieuw.");
    }
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <input
          type="text"
          placeholder="Loginnaam"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-60 p-2 mb-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-60 p-2 mb-2 border border-gray-300 rounded-lg"
          required
        />
        <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-400">Inloggen</button>
      </form>
      <p className="mt-2">Pogingen: {attempts}</p>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}

export default App;
