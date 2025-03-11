import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const profileHints = {
  "/profile/ayaan-hassan": [
    "Denk aan de naam van een huisdier.",
    "Fotografie speelt een rol in het wachtwoord.",
    "Het wachtwoord bevat een jaartal."
  ],
  "/login/ayaan-hassan": [
    "Denk aan een specifieke combinatie van letters en cijfers.",
    "Controleer DeveloperTools (F12)"
  ],
  "/profile/emma-van-dijk": [
    "Het wachtwoord heeft te maken met schilderen.",
    "Identificeert zich als",
    "Denk aan de geboortedatum."
  ],
  "/login/emma-van-dijk": [
    "Controleer DeveloperTools (F12)"
  ],
  "/profile/j.ellens": [
    "Het wachtwoord heeft te maken met zijn skateboarden",
    "Denk aan het geboortejaar."
  ],
  "/login/j.ellens": [
    "Combineer een sport met een getal.",
    "Controleer DeveloperTools (F12)"
  ],
  "/profile/lukas.20": [
    "Kijk naar de beschrijving van een post.",
    "Denk aan zijn passie",
    "Denk aan zijn leeftijd."
  ],
  "/login/lukas.20": [
    "Controleer DeveloperTools (F12)"
  ],

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
        const currentHints = profileHints[profileKey].filter(hint => !hintsShown.includes(hint));
        if (currentHints.length > 0) {
          const newHint = currentHints[Math.floor(Math.random() * currentHints.length)];
          setHintsShown((prevHints) => [...prevHints, newHint]);
        }
      }
    }, 60000); 
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(hintInterval);
    };
  }, [location.pathname, hintsShown]);

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
