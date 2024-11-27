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
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { East } from "@mui/icons-material";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";

const AllJobs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/publishedJobs");
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
    <div>
      <Container maxWidth="lg">
        <Grid my={7}>
          <SectionTitle title="All Jobs" subtitle="Choice Your Dream" />
        </Grid>
        <Grid container spacing={3} my={5}>
          {jobs.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <Card sx={{ maxWidth: 345 }} elevation={5}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.companyCover}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.jobTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Posted at: {data.postedTime}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/JobDetails/${data._id}`}>
                    <Button size="small" color="primary" endIcon={<East />}>
                      See Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllJobs;
