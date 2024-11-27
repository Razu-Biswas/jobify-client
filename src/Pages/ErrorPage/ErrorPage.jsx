import Lottie from "lottie-react";
import errorAnimation from "../../assets/404.json";
import { Button, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
    <Grid sx={{width: { xs: '80vw', md: '60vw'}}}>
    <Lottie width={'50vw'} height={'50vh'} animationData={errorAnimation}/>
    </Grid>
      
     <Grid sx={{display: 'flex', alignItems: 'center', gap: 2}}>
     <Button onClick={() => navigate(-1)} size=""  startIcon={<KeyboardBackspaceIcon />}>
        Go Back
      </Button>
      <Button onClick={() => navigate('/')}  size="large" variant="contained">Home</Button>
     </Grid>
    </div>
  );
};

export default ErrorPage;
