import { Container, Grid, Typography } from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "32px 0",
};

const logoStyle = {
  width: 100, // Adjust the width of the logo as needed
  marginBottom: 16,
};

const linkStyle = {
  marginRight: 16,
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={footerStyle}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4} style={logoStyle}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <WorkIcon
                  sx={{
                    mr: 1,
                    fontSize: "3rem",
                    color: "primary.main",
                  }}
                />

                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",

                    textDecoration: "none",
                  }}
                >
                  Jobi
                  <Typography
                    variant="h4"
                    noWrap
                    sx={{ color: "primary.main" }}
                  >
                    Fy
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body2" align="center">
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
                <Link to="/about" style={linkStyle}>
                  About Us
                </Link>
                <Link to="/" style={linkStyle}>
                  Our Story
                </Link>
                <Link to="/" style={linkStyle}>
                  Jobs
                </Link>
                <Link to="/" style={linkStyle}>
                  Contact Us
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                © {new Date().getFullYear()} JobiFy Website
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
