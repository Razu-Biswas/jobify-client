import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import pic1 from "../../../assets/cards/g1.jpg";
import pic2 from "../../../assets/cards/g2.jpg";
import pic3 from "../../../assets/cards/g3.jpg";
import pic4 from "../../../assets/cards/g4.jpg";

const DonationProcess = () => {
  return (
    <div>
      <Container>
        <Grid py={7}>
          <SectionTitle
            title="Donation Steps"
            subtitle="The donation steps from the time you arrive center until the time you leave"
          />
        </Grid>
        <Grid display={"flex"} justifyContent={"center"}>
          <Grid container pb={6} spacing={2}>
            {/* Large device: Show 4 columns */}
            <Grid item lg={3} md={6} xs={12}>
              <Card sx={{ maxWidth: 345, minHeight: 350 }} elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pic1}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Step 1: Registration
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Register yourself at a blood donation center or an event.
                      Provide necessary information such as personal details and
                      medical history
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card sx={{ maxWidth: 345, minHeight: 350 }} elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pic2}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Step 2: Screening
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Undergo a health screening where medical professionals
                      check your vitals, hemoglobin levels, and ensure you meet
                      donation criteria for safety.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card sx={{ maxWidth: 345, minHeight: 350 }} elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pic3}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Step 3: Donation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The donation process involves extracting a pint of blood,
                      which typically takes around 8-10 minutes. Relax and
                      hydrate afterward.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card sx={{ maxWidth: 345, minHeight: 350 }} elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pic4}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Step 4: Rest and Refreshment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      After donation, take a short rest, enjoy refreshments
                      provided, and avoid heavy lifting or strenuous activity
                      for the next few hours.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DonationProcess;
