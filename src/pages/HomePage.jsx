import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function HomePage() {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <Typography variant="h2" className="font-bold text-white">
        Welkom op InstaBlam
      </Typography>
      <Typography variant="lead" className="mt-4 text-gray-300">
        Bekijk het profiel en ontdek meer.
      </Typography>
      <Card className="w-full max-w-md mt-6 shadow-lg bg-gray-800 border border-gray-700">
        <CardHeader className="bg-gray-900 text-center py-4">
          <Typography variant="h5" className="text-white">
            Kies een profiel om te hacken:
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Link to="/profile/ayaan-hassan">
            <Button fullWidth variant="filled" color="blue">
              Ayaan Hassan
            </Button>
          </Link>
          <Link to="/profile/emma-van-dijk">
            <Button fullWidth variant="filled" color="blue">
              Emma van Dijk
            </Button>
          </Link>
          <Link to="/profile/j.ellens">
            <Button fullWidth variant="filled" color="blue">
              Jamie Ellens
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default HomePage;
