import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const profileHints = {
  "/profile/ayaan-hassan": [
    "Denk aan de naam van een huisdier.",
    "Fotografie speelt een rol in het wachtwoord.",
    "Het wachtwoord bevat een jaartal."
  ],
  "/login/ayaan-hassan": [
    "Denk aan de naam van een huisdier.",
    "Fotografie speelt een rol in het wachtwoord.",
    "Het wachtwoord bevat een jaartal."
  ],
  "/profile/emma-van-dijk": [
    "Het wachtwoord heeft te maken met schilderen.",
    "Het wachtwoord bevat een cijfer.",
    "Denk aan de geboortedatum."
  ],
  "/login/emma-van-dijk": [
    "Het wachtwoord heeft te maken met schilderen.",
    "Het wachtwoord bevat een cijfer.",
    "Denk aan de geboortedatum."
  ],
  "/profile/j.ellens": [
    "Het wachtwoord heeft te maken met zijn skateboarden",
    "Denk aan het geboortejaar."
  ],
  "/login/j.ellens": [
    "Het wachtwoord heeft te maken met zijn skateboarden",
    "Denk aan het geboortejaar."
  ],
  "/profile/lukas.20": [
    "Kijk naar de titel van de post.",
    "Denk aan zijn leeftijd."
  ],
  "/login/lukas.20": [
    "Kijk naar de titel van de post.",
    "Denk aan zijn leeftijd."
  ]
};

function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hintsShown, setHintsShown] = useState([]);
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    if (!location.pathname.startsWith("/profile") && !location.pathname.startsWith("/login")) {
      setElapsedTime(0);
      setHintsShown([]);
    }
    
    setPreviousPath(location.pathname);
    
    const timeInterval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000); // Elke seconde verhogen
    
    const hintInterval = setInterval(() => {
      const profileKey = location.pathname;
      if (profileHints[profileKey]) {
        const currentHints = profileHints[profileKey];
        const newHint = currentHints[Math.floor(Math.random() * currentHints.length)];
        setHintsShown((prevHints) => [...prevHints, newHint]);
      }
    }, 60000); // Elke minuut een nieuwe hint
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(hintInterval);
    };
  }, [location.pathname]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <p className="text-lg font-bold">Tijd verstreken: {minutes} min {seconds} sec</p>
      <div className="mt-2 text-green-400">
        {hintsShown.map((hint, index) => (
          <p key={index}>{hint}</p>
        ))}
      </div>
    </div>
  );
}

export default Timer;
