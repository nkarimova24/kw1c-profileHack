import { useState } from "react";
import { useParams } from "react-router-dom";

const loginData = {
  "ayaan-hassan": { username: "admin", password: "NoorFoto1990" },
  "emma-van-dijk": { username: "admin", password: "Schilder123" }
};

function Login() {
  const { id } = useParams();
  const profileLogin = loginData[id] || loginData["ayaan-hassan"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    if (username === profileLogin.username && password === profileLogin.password) {
      setMessage("Gefeliciteerd! Je hebt het profiel gehackt.");
    } else {
      setMessage("Onjuiste login. Probeer opnieuw.");
    }
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold">Login voor {id.replace('-', ' ')}</h2>
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

export default Login;
