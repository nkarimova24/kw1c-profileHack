import { Link } from "react-router-dom";

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

export default Home;