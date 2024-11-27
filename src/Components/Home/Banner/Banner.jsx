import { Button, Container, Grid, Typography } from "@mui/material";
import "./Banner.css";
import { HowToReg, Search } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner-container">
      <Container
        className="banner-content"
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", height: "700px" }}
      >
        <div className="banner-text">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Simplifying the job hunt for everyone.",

              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "Discover. Apply. Succeed.",
              1500,
              "Your next step, made easy.",
              1500,
              "Transforming lives through work.",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontWeight: "700",
            }}
            repeat={Infinity}
          />
          <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
            <Typography
              variant="inherit"
              sx={{
                color: "primary.main",
                fontWeight: "700",
                display: "inline",
              }}
            >
              Opportunities.
            </Typography>{" "}
            Career, <br />
            Jobs made simple.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ maxWidth: "650px", color: "#333333", fontWeight: "500" }}
            gutterBottom
          >
            Welcome to{" "}
            <Typography
              sx={{
                color: "primary.main",
                display: "inline",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              JobiFy
            </Typography>
            . Build a job portal that not only lists jobs but also inspires
            careers.Empowering others to find the right job is one of the most
            rewarding ventures.A successful job search platform understands the
            needs of both employers and job seekers.
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mt: 4,
            }}
          >
            <Link to={"/searchPage"}>
              <Button variant="contained" startIcon={<Search />}>
                Search Job
              </Button>
            </Link>
            <Link to={"/registration"}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<HowToReg />}
              >
                Join as
              </Button>
            </Link>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
