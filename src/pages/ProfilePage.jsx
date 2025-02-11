import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const profiles = {
  "ayaan-hassan": {
    name: "Ayaan Hassan",
    location: "Amsterdam, Nederland",
    birthdate: "15 maart 1990",
    hobby: "Fotografie, reizen, programmeren",
    image:
      "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image/v1727287263/240924-accessories-m-cspot",
    posts: [
      {
        text: "Mooie dag om wat foto's te maken! 📸",
        image:
          "https://i0.wp.com/www.wattisduurzaam.nl/wp-content/uploads/6005560602_3f3ddc3a4a_o-1.jpg",
        likes: 34,
      },
      {
        text: "Ik heb een nieuwe kat, Noor! 🐱",
        image:
          "https://assets.tiltify.com/uploads/media_type/image/203025/blob-09636982-a21a-494b-bbe4-3692c2720ae3.jpeg",
        likes: 71,
      },
    ],
  },
  "emma-van-dijk": {
    name: "Emma van Dijk",
    location: "Rotterdam, Nederland",
    birthdate: "22 juli 1995",
    hobby: "Schilderen, muziek, lezen",
    image:
      "https://forcreativegirls.com/contents/uploads/2022/07/How-Creative-Women-Enhance-their-Career-Prospects.jpg",
    posts: [
      {
        text: "Vandaag een prachtig schilderij afgemaakt! 🎨",
        image:
          "https://cdn.shopifycdn.net/s/files/1/2497/5092/files/9_22.jpg?v=1620347079",
        likes: 108,
      },
      {
        text: "Nieuwe boeken gekocht voor mijn collectie. 📚",
        image:
          "https://i.ytimg.com/vi/AYK0NMkCkic/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBLTMlp9-Xi8k77ye_XhfEhFnsjdg",
        likes: 90,
      },
    ],
  },
  "j.ellens": {
    name: "Jamie Ellens",
    location: "Nijmegen, Nederland",
    birthdate: "3 Augustus",
    hobby: "Skaten, koken, graffiti",
    image:
      "https://images.unsplash.com/photo-1611453621839-da40752783fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGVyJTIwYm95fGVufDB8fDB8fHww",
    posts: [
      {
        text: "De zoveelste kickflip van vandaag",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Skateboarding_kickflip_2.jpg/220px-Skateboarding_kickflip_2.jpg",
        likes: 99,
      },
      {
        text: "Frans cuisine",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIpqUKeuhR2q6JlrcAsZKsLdFLilHWlAyhA&s",
        likes: 90,
      },
    ],
  },
  "lukas.20": {
    name: "Lukas Huizen",
    location: "Oploo, Nederland",
    birthdate: "13 September",
    hobby: "Programmeren, gamen, series kijken",
    image:
      "https://media.istockphoto.com/id/1305224036/photo/latin-man-gaming-on-his-pc-during-a-live-stream.jpg?s=612x612&w=0&k=20&c=m44oOlCqEgFs5MyLzz5zSr21kNmFbteOg0c6-ETNWSI=",
    posts: [
      {
        text: "Rate mijn setup, ze noemen mij ook wel de GameMaster",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1NXnLGdg47QZNxKiI77zU2YNF1sS3yfNgA&s",
        likes: 3,
      },
      {
        text: "HACKED",
        image:
          "",
        likes: 90,
      },
    ],
  },
};

function ProfilePage({ resetTimer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  //fallback default profile when none is found
  const profile = profiles[id] || profiles["ayaan-hassan"];

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const handleBackToHome = () => {
    resetTimer();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      {/*grid*/}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/*profile info column*/}
        <div className="md:w-1/3">
          <Card className="bg-gray-800 border border-gray-700 shadow-lg">
            <CardHeader floated={false} className="h-56">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt="Profiel Foto"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-t-lg">
                  <Typography variant="h4" color="gray">
                    Geen foto
                  </Typography>
                </div>
              )}
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="text-gray-400 mb-2">
                <div className="text-gray-300">{profile.name}</div>  <Typography variant="small" className="text-gray-400 mb-3">
                {profile.birthdate}
              </Typography>
              </Typography>
              <Typography className="text-gray-300 mb-1">
                {profile.location}
              </Typography>
              <Typography className="text-gray-400 mb-4">
    Ik hou me graag bezig met...<strong className="text-gray-300">{profile.hobby}</strong>
              </Typography>
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
              <Link to={`/login/${id}`}>
                <Button fullWidth variant="filled">
                  Probeer in te loggen
                </Button>
              </Link>
              <Button
                fullWidth
                variant="outlined"
                color="gray"
                className="text-gray-300"
                onClick={() => setIsOpen(true)}
              >
                Terug naar Home
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/*posts grid column */}
        <div className="md:w-2/3">
          <Typography variant="h4" className="mb-1 text-left">
            Posts
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profile.posts.map((post, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700 shadow-md">
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post afbeelding"
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                )}
                <CardBody className="p-2">
                  <Typography variant="small" className="text-red-400 font-bold">
                    ❤️ {post.likes}
                  </Typography>
                  <Typography variant="small" className="mt-1 text-gray-300">
                    {post.text}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/*dialog reset*/}
      <Dialog className="bg-gray-800 border border-gray-700 shadow-lg" open={isOpen} handler={closeModal}>
        <DialogHeader className="text-gray-300">Weet je zeker dat je deze pagina wilt verlaten?</DialogHeader>
        <DialogBody className="text-gray-300">
          <strong>De timer zal worden gereset</strong>
        </DialogBody>
        <DialogFooter>
          <Button className="text-gray-300" onClick={closeModal}>
            Annuleren
          </Button>
          <Button variant="filled" color="red" onClick={handleBackToHome}>
            Ja, verlaat de pagina
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ProfilePage;
