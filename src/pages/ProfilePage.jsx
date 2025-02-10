import { useParams, useNavigate, Link } from "react-router-dom";

const profiles = {
  "ayaan-hassan": {
    name: "Ayaan Hassan",
    location: "Amsterdam, Nederland",
    birthdate: "15 maart 1990",
    hobby: "Fotografie, reizen, programmeren",
    image: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image/v1727287263/240924-accessories-m-cspot",
    posts: [
      { text: "Mooie dag om wat foto's te maken! 📸", image: "https://i0.wp.com/www.wattisduurzaam.nl/wp-content/uploads/6005560602_3f3ddc3a4a_o-1.jpg", likes: 34 },
      { text: "Ik heb een nieuwe kat, Noor! 🐱", image: "https://assets.tiltify.com/uploads/media_type/image/203025/blob-09636982-a21a-494b-bbe4-3692c2720ae3.jpeg", likes: 71 }
    ]
  },
  "emma-van-dijk": {
    name: "Emma van Dijk",
    location: "Rotterdam, Nederland",
    birthdate: "22 juli 1995",
    hobby: "Schilderen, muziek, lezen",
    image: "https://forcreativegirls.com/contents/uploads/2022/07/How-Creative-Women-Enhance-their-Career-Prospects.jpg",
    posts: [
      { text: "Vandaag een prachtig schilderij afgemaakt! 🎨", image: "https://cdn.shopifycdn.net/s/files/1/2497/5092/files/9_22.jpg?v=1620347079", likes: 108 },
      { text: "Nieuwe boeken gekocht voor mijn collectie. 📚", image: "https://i.ytimg.com/vi/AYK0NMkCkic/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBLTMlp9-Xi8k77ye_XhfEhFnsjdg", likes: 90 }
    ]
  }
};

function ProfilePage({ resetTimer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles[id] || profiles["ayaan-hassan"];

  const handleBackToHome = () => {
    const confirmLeave = window.confirm("Weet je zeker dat je deze pagina wilt verlaten? De timer zal worden gereset");
    if (confirmLeave) {
      // resetTimer();
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
          <p><strong>{profile.name}:</strong> {post.text}</p>
          <img src={post.image} alt="Post afbeelding" className="mt-2 rounded-lg w-full" />
          <p className="mt-2 text-red-500 font-bold">❤️ {post.likes} likes</p>
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

export default ProfilePage;
