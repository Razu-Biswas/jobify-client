import {
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useUserProfile from "../../../hooks/useUserProfile";

import { AccountCircle, Edit } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProfile = () => {
  const [user, userLoading] = useUserProfile();
  const [districts, disLoading] = useDistricts();
  const [upazilas, upLoading] = useUpazilas();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  if (userLoading || disLoading || upLoading)
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

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const imgRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (imgRes.data.success) {
      const userInfo = {
        name: data.name,
        email: data.email,
        status: "active",
        image: imgRes.data.data.display_url,
      };

      const res = await axiosSecure.patch(
        `/api/v1/updateUser/${user.email}`,
        userInfo
      );
      console.log(res.data);
      if (res.data.modifiedCount) {
        updateUser(userInfo.name, userInfo.image)
          .then(() => {
            toast.success("Update successful!");
            reset();
            navigate("/dashboard/profile");
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
        // toast.success("Update successful!");
        //     reset();
        // navigate("/dashboard/profile");
      }
      //   console.log(userInfo);
    }
  };

  return (
    <div>
      <Paper
        elevation={7}
        sx={{ py: 7, px: 5, width: "fit-content", mx: "auto" }}
      >
        <SectionTitle
          title="Update Profile"
          subtitle="Give proper information to update profile"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            mt={5}
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            maxWidth={"700px"}
          >
            <TextField
              id="standard-basic"
              label="Full Name"
              type="text"
              {...register("name")}
              defaultValue={user?.name}
              required
            />
            <TextField
              id="standard-basic"
              label="Email"
              {...register("email")}
              type="email"
              value={user?.email}
              required
            />
            <TextField
              id="input-with-icon-textfield"
              label="Profile Picture"
              required
              type="file"
              {...register("image")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <Button type="submit" variant="contained" endIcon={<Edit />}>
              Update
            </Button>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default UpdateProfile;
