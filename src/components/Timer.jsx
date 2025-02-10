import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const profileHints = {
  "/login/ayaan-hassan": [
    "Denk aan de naam van een huisdier.",
    "Fotografie speelt een rol in het wachtwoord.",
    "Het wachtwoord bevat een jaartal."
  ],
  "/login/emma-van-dijk": [
    "Het wachtwoord heeft te maken met schilderen.",
    "Het wachtwoord bevat een cijfer.",
    "Denk aan de geboortedatum."
  ]
};

function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hint, setHint] = useState("");
  const location = useLocation();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000); // Elke seconde verhogen
    
    const hintInterval = setInterval(() => {
      const currentHints = profileHints[location.pathname] || [
        "Denk aan iets persoonlijks voor het wachtwoord.",
        "Hoofdletters kunnen belangrijk zijn!"
      ];
      const randomHint = currentHints[Math.floor(Math.random() * currentHints.length)];
      setHint(randomHint);
    }, 60000); 
    
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
      {hint && <p className="mt-2 text-green-400">Hint: {hint}</p>}
    </div>
  );
}

export default Timer;
