import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { CircularProgress, Container, Grid } from "@mui/material";

const JobDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: job, isLoading } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/jobDetails/${id}`);
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
      <Container sx={{ my: 8 }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={job.companyCover} width={"100%"} alt="" />
        </Grid>
        <div>
          <div dangerouslySetInnerHTML={{ __html: job.jobTitle }} />

          <div dangerouslySetInnerHTML={{ __html: job.jobContent }} />
        </div>
      </Container>
    </div>
  );
};

export default JobDetails;
