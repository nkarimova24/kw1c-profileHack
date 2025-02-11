import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function HomePage() {
  const profiles = [
    {
      id: "ayaan-hassan",
      name: "Ayaan Hassan",
      image:
        "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image/v1727287263/240924-accessories-m-cspot",
    },
    {
      id: "emma-van-dijk",
      name: "Emma van Dijk",
      image:
        "https://forcreativegirls.com/contents/uploads/2022/07/How-Creative-Women-Enhance-their-Career-Prospects.jpg",
    },
    {
      id: "j.ellens",
      name: "Jamie Ellens",
      image:
        "https://images.unsplash.com/photo-1611453621839-da40752783fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2thdGVyJTIwYm95fGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <Typography variant="h2" className="font-bold text-white">
        Welkom op InstaBlam
      </Typography>
      <Typography variant="lead" className="mt-2text-gray-300">
        Kies een profiel om te hacken:
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            className="bg-gray-800 border border-gray-800 shadow-lg"
          >
            <CardHeader className="h-40">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="text-white">
                {profile.name}
              </Typography>
            </CardBody>
            <div className="p-4">
              <Link to={`/profile/${profile.id}`}>
                <Button fullWidth variant="filled">
                  Hack {profile.name}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
