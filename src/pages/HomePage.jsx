import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Welkom op Fakebook</h1>
      <p className="mt-4">Bekijk het profiel en ontdek meer.</p>
      <div className="mt-6">
        <h2 className="text-lg font-bold">Kies een profiel om te hacken:</h2>
        <Link to="/profile/ayaan-hassan" className="block bg-blue-500 p-2 mt-2 rounded-lg text-white hover:bg-blue-400">
          Ayaan Hassan
        </Link>
        <Link to="/profile/emma-van-dijk" className="block bg-blue-500 p-2 mt-2 rounded-lg text-white hover:bg-blue-400">
          Emma van Dijk
        </Link>
        <Link to="/profile/j.ellens" className="block bg-blue-500 p-2 mt-2 rounded-lg text-white hover:bg-blue-400">
          Jamie Ellens
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
