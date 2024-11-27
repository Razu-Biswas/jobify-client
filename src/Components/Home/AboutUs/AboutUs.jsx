import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 16 }}>
      <SectionTitle
        title="About Us"
        subtitle="Here goes about us, our mission, our vision"
      />
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ minHeight: "250px" }}>
            <CardContent>
              <Typography
                variant="h4"
                fontWeight={700}
                color={"primary"}
                gutterBottom
              >
                Our Mission
              </Typography>
              <Typography variant="body1" color={"rgba(128, 128, 128, 0.9)"}>
                We aim to simplify the job search process through innovative
                technology, intuitive design, and personalized support,
                fostering growth, success, and impactful careers for individuals
                and organizations alike
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ minHeight: "250px" }}>
            <CardContent>
              <Typography
                variant="h4"
                fontWeight={700}
                color={"primary"}
                gutterBottom
              >
                Our Vision
              </Typography>
              <Typography variant="body1" color={"rgba(128, 128, 128, 0.9)"}>
                We aim to simplify the job search process through innovative
                technology, intuitive design, and personalized support,
                fostering growth, success, and impactful careers for individuals
                and organizations alike
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ minHeight: "250px" }}>
            <CardContent>
              <Typography
                variant="h4"
                fontWeight={700}
                color={"primary"}
                gutterBottom
              >
                About Us
              </Typography>
              <Typography variant="body1" color={"rgba(128, 128, 128, 0.9)"}>
                Our mission is to empower job seekers by connecting them with
                meaningful opportunities and to assist employers in finding the
                right talent.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
