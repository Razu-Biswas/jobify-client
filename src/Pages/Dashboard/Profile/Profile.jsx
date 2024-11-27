import {
  Avatar,
  Badge,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import useUserProfile from "../../../hooks/useUserProfile";
import {
  Block,
  Bloodtype,
  Edit,
  Email,
  FiberManualRecord,
  LocationOn,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, isLoading] = useUserProfile();

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
      <Paper
        elevation={10}
        sx={{
          maxWidth: { xs: "80vw", md: "60vw" },
          mx: "auto",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          px: 5,
          py: 7,
        }}
      >
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                padding: "2px 4px",
                backgroundColor: `${
                  user.status === "active"
                    ? "rgba(83, 166, 83, 0.4)"
                    : "rgba(255,51,51, 0.3)"
                }`,
                borderRadius: "6px",
                marginTop: "-5px 0 0 -5px",
              }}
            >
              {user.status === "active" ? (
                <FiberManualRecord color="success" fontSize="small" />
              ) : (
                <Block color="error" fontSize="small" />
              )}

              {user.status}
            </span>
          }
        >
          <Avatar
            alt={user.name}
            src={user.image}
            sx={{ width: 120, height: 120, border: "4px solid darkgray" }}
          />
        </Badge>

        <Typography variant="h4" fontWeight={600}>
          {user.name}
        </Typography>
        <Grid
          sx={{
            display: "block",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Email fontSize="small" /> Email:
            </Typography>{" "}
            {user.email}
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              {/* <Bloodtype color="error" fontSize="small" /> Blood Group: */}
            </Typography>{" "}
            {/* <Typography sx={{textTransform: 'uppercase'}}>{user?.bloodGroup}</Typography> */}
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              fontWeight={600}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              {/* <LocationOn color="info" fontSize="small" /> Address: */}
            </Typography>{" "}
            {/* {user?.upazila}, {user?.district} */}
          </Typography>
        </Grid>

        <Link to={"/dashboard/updateProfile"}>
          <Button variant="contained" startIcon={<Edit />}>
            {" "}
            Update Profile
          </Button>
        </Link>
      </Paper>
    </div>
  );
};

export default Profile;
