import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

import {
  Button,
  ButtonGroup,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Delete, East, Edit, RemoveRedEye } from "@mui/icons-material";
import { Link } from "react-router-dom";

import Empty from "../../../Components/Shared/Empty/Empty";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            `Welcome! ${user.displayName}`,
            1500,
            `Manager M! ${user.displayName}`,
            1500,
            `Manager S  ${user.displayName}`,
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
    </div>
  );
};

export default UserHome;
