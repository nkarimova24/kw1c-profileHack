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
import { Fragment, useState } from "react";
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
    birthdate: "3 Augustus 1999",
    hobby: "Skaten, koken, graffiti",
    image: "",
    posts: [
      { text: "De zoveelste kickflip van vandaag", image: "", likes: 99 },
      { text: "Frans cuisine", image: "", likes: 90 },
    ],
  },
};

function ProfilePage({ resetTimer }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // Fallback to a default profile if the id isn't found
  const profile = profiles[id] || profiles["ayaan-hassan"];

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const handleBackToHome = () => {
    resetTimer();
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader floated={false} className="h-56">
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profiel Foto"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <Typography variant="h4" color="gray">
                Geen foto
              </Typography>
            </div>
          )}
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {profile.name}
          </Typography>
          <Typography color="gray" className="mb-1">
            {profile.location}
          </Typography>
          <Typography variant="small" color="gray" className="mb-4">
            {profile.birthdate}
          </Typography>
          <Typography className="mb-4">
            <strong>Hobby's:</strong> {profile.hobby}
          </Typography>

          <Typography variant="h6" className="mb-2">
            Posts
          </Typography>
          <div className="space-y-4">
            {profile.posts.map((post, index) => (
              <Card key={index} className="bg-gray-100">
                <CardBody>
                  <Typography className="mb-2">
                    <strong>{profile.name}:</strong> {post.text}
                  </Typography>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post afbeelding"
                      className="w-full rounded-lg mb-2"
                    />
                  )}
                  <Typography variant="small" color="red" className="font-bold">
                    ❤️ {post.likes} likes
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between gap-2">
          <Link to={`/login/${id}`} className="w-full">
            <Button fullWidth variant="filled" color="blue">
              Probeer in te loggen
            </Button>
          </Link>
          <Button
            fullWidth
            variant="outlined"
            color="gray"
            onClick={() => setIsOpen(true)}
          >
            Terug naar Home
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog for confirmation */}
      <Dialog open={isOpen} handler={closeModal}>
        <DialogHeader>
          Weet je zeker dat je deze pagina wilt verlaten?
        </DialogHeader>
        <DialogBody divider>
          De timer zal worden gereset.
        </DialogBody>
        <DialogFooter>
          <Button variant="outlined" color="gray" onClick={closeModal}>
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
