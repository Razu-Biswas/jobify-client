import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import authAnimation from "../../assets/authentication.json";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // console.log(location.state);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    if (data.password.length < 6) {
      setError("⚠️Password must be at least 6 characters.");
      return;
    }
    setError("");
    login(data.email, data.password)
      .then((res) => {
        if (res.user) {
          navigate(location.state || "/");
          toast.success("Logged in successfully!");
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
        setError("⚠️Invalid email or password");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ minHeight: "70vh", display: "flex" }}>
        <Paper
          elevation={5}
          sx={{
            px: 5,
            py: 6,
            width: "100%",
            heigh: "70vh",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 5,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Jo
              <Typography
                variant="h3"
                noWrap
                sx={{ color: "rgba(220, 20, 60, 1)", display: "inline" }}
              >
                bi
              </Typography>
            </Typography>
            <Typography variant="h5">Login Here</Typography>
            <Lottie animationData={authAnimation} loop={true} />
          </div>
          <Grid sx={{ width: { md: "450px" } }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                sx={{ display: "grid", gridColumn: "1", gap: 4, width: "100%" }}
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  {...register("email")}
                  variant="standard"
                  required
                />
                <FormControl sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: true })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {error && (
                  <span
                    style={{
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "red",
                    }}
                  >
                    {error}
                  </span>
                )}
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
