import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { East } from "@mui/icons-material";
import "./LatestJobs.css";

const LatestJobs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: latestJob, isLoading } = useQuery({
    queryKey: ["latestJobs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/latestJobs");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "rgba(220, 20, 60, 1)" }} />
      </div>
    );

  return (
    <div className="cover">
      <div className="content">
        <Container>
          <Grid py={7}>
            <SectionTitle
              title="Latest Jobs"
              subtitle="Read Our Latest Jobs Entries"
            />
          </Grid>
          <Grid display={"flex"} justifyContent={"center"} pb={6}>
            <Grid container pb={6} spacing={2}>
              {/* Large device: Show 4 columns */}
              {latestJob?.map((job) => (
                <Grid key={job._id} item xs={12} sm={6} md={4} lg={4}>
                  <Card sx={{ maxWidth: 345 }} elevation={5}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={job.companyCover}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {job.jobTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Posted at: {job.postedTime}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to={`/jobDetails/${job._id}`}>
                        <Button size="small" color="primary" endIcon={<East />}>
                          See Details
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default LatestJobs;
