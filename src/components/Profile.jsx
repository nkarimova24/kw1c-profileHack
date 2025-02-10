import { useParams, useNavigate, Link } from "react-router-dom";

const profiles = {
  "ayaan-hassan": {
    name: "Ayaan Hassan",
    location: "Amsterdam, Nederland",
    birthdate: "15 maart 1990",
    hobby: "Fotografie, reizen, programmeren",
    image: "https://via.placeholder.com/150",
    posts: [
      "Mooie dag om wat foto's te maken! 📸",
      "Ik heb een nieuwe kat, Noor! 🐱"
    ]
  },
  "emma-van-dijk": {
    name: "Emma van Dijk",
    location: "Rotterdam, Nederland",
    birthdate: "22 juli 1995",
    hobby: "Schilderen, muziek, lezen",
    image: "https://via.placeholder.com/150",
    posts: [
      "Vandaag een prachtig schilderij afgemaakt! 🎨",
      "Nieuwe boeken gekocht voor mijn collectie. 📚"
    ]
  }
};

function Profile({ resetTimer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles[id] || profiles["ayaan-hassan"];

  const handleBackToHome = () => {
    const confirmLeave = window.confirm("Weet je zeker dat je deze pagina wilt verlaten? De timer zal worden gereset");
    if (confirmLeave) {
      resetTimer();
      navigate("/");
    }
  };

  return (
    <div className="text-center mt-10 bg-white p-6 rounded-lg shadow-lg w-96">
      <img
        src={profile.image}
        alt="Profiel Foto"
        className="rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
      <p className="text-gray-600">{profile.location}</p>
      <p className="text-gray-400">{profile.birthdate}</p>
      <p className="mt-4">Hobby's: {profile.hobby}</p>
      <h3 className="text-lg font-bold mt-6">Posts</h3>
      {profile.posts.map((post, index) => (
        <div key={index} className="mt-2 p-4 bg-gray-200 rounded-lg">
          <p><strong>{profile.name}:</strong> {post}</p>
        </div>
      ))}
      <Link to={`/login/${id}`} className="mt-6 block bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-400">
        Probeer in te loggen
      </Link>
      <button onClick={handleBackToHome} className="mt-4 block bg-gray-500 p-2 rounded-lg text-white hover:bg-gray-400">
        Terug naar Home
      </button>
    </div>
  );
}

export default Profile;
