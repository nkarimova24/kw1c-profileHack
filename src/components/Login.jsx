import { useState } from "react";
import { useParams } from "react-router-dom";

const loginData = {
  "ayaan-hassan": { username: "admin", password: "NoorFoto1990", name: "Ayaan Hassan" },
  "emma-van-dijk": { username: "emma", password: "Schilder123", name: "Emma van Dijk" }
};

function Login({ setAttempts }) {
  const { id } = useParams();
  const [profileLogin] = useState(loginData[id] || null);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setAttempts((prev) => [...prev, password]);

    if (profileLogin && password === profileLogin.password) {
      setMessage(`Gefeliciteerd! Je hebt het profiel van ${profileLogin.name} gehackt.`);
    } else {
      setMessage("Onjuist wachtwoord. Probeer opnieuw.");
    }
  };

  return (
    <div className="text-center mt-10">
      {profileLogin ? (
        <>
          <h2 className="text-xl font-bold">Welkom {profileLogin.name}</h2>
          <form onSubmit={handleLogin} className="mt-4">
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
        </>
      ) : (
        <p className="text-red-500">Profiel niet gevonden.</p>
      )}
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}

export default Login;
