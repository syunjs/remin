import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="absolute top-0 left-0 -z-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-indigo-50 blur-3xl"></div>

      <Typography
        className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-[8rem] leading-none font-black text-transparent"
        variant="h1"
      >
        404
      </Typography>

      <Typography className="mb-4 font-medium text-gray-800" variant="h4">
        Page Not Found
      </Typography>

      <Typography className="mb-10 max-w-md text-gray-500" variant="body1">
        The page you are looking for doesn&apos;t exist or has been moved.
      </Typography>

      <Button
        className="rounded-md border-blue-500 px-6 py-2.5 text-blue-600 hover:bg-blue-50"
        color="primary"
        onClick={() => navigate("/")}
        startIcon={<ArrowBackIcon />}
        variant="outlined"
      >
        Back to Home
      </Button>
    </div>
  );
}
