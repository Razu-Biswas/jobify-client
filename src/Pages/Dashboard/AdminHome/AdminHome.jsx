import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { TypeAnimation } from "react-type-animation";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import usersIcon from "../../../assets/users.png";

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            `Welcome! ${user.displayName}`,
            1500,
            `Bienvenue! ${user.displayName}`,
            1500,
            `Yōkoso!  ${user.displayName}`,
            1500,
            `Bienvenido!  ${user.displayName}`,
            1500,
            `Willkommen!  ${user.displayName}`,
            1500,
            `Benvenuto!  ${user.displayName}`,
            1500,
            `Dobro pozhalovat'!  ${user.displayName}`,
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "3em",
            display: "inline-block",
            fontWeight: "700",
          }}
          repeat={Infinity}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <SectionTitle
          title="Statistics"
          subtitle="Here goes user traffic, total funding, total requests"
        />
      </div>
      <Grid
        component={Paper}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        width={"fit-content"}
        mx={"auto"}
        mt={7}
      >
        <Grid
          display="flex"
          alignItems="center"
          gap={2}
          px={5}
          py={3}
          bgcolor={"rgba(220, 20, 60, 0.2)"}
        >
          <Grid>
            <img src={usersIcon} style={{ maxWidth: "60px" }} alt="" />
          </Grid>
          <Grid>
            <Typography variant="h6" color="primary.main" fontWeight={700}>
              Total Users
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminHome;
