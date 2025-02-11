import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

const loginData = {
  "ayaan-hassan": {
    username: "admin",
    password: "NoorFoto1990",
    name: "Ayaan Hassan",
  },
  "emma-van-dijk": {
    username: "admin",
    password: "Schilder123",
    name: "Emma van Dijk",
  },
  "j.ellens": {
    username: "admin",
    password: "KickFlip99",
    name: "Jamie Ellens",
  },
};

function Login({ setAttempts }) {
  const { id } = useParams();
  const profileLogin = loginData[id] || null;
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setAttempts((prev) => [...prev, password]);

    if (profileLogin && password === profileLogin.password) {
      setMessage(
        `Gefeliciteerd! Je hebt het profiel van ${profileLogin.name} gehackt.`
      );
    } else {
      setMessage("Onjuist wachtwoord. Probeer opnieuw.");
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      {profileLogin ? (
        <Card className="w-full max-w-md shadow-2xl bg-gray-800 border border-gray-700">
          <CardHeader className="bg-gray-900 text-center py-4">
            <Typography variant="h5" className="text-white">
              Welkom {profileLogin.name}
            </Typography>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="password"
                label="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-700 text-white"
                labelProps={{ className: "text-gray-300" }}
              />
              {message && (
                <Typography variant="small" className="text-red-400">
                  {message}
                </Typography>
              )}
            </CardBody>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" fullWidth color="blue">
                Inloggen
              </Button>
              <Link to={`/profile/${id}`}>
                <Button fullWidth variant="outlined" color="gray">
                  Terug naar Profiel
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Typography variant="h6" className="mt-10 text-red-400">
          Profiel niet gevonden.
        </Typography>
      )}
    </div>
  );
}

export default Login;
