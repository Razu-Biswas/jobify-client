import {
  Avatar,
  Button,
  ButtonGroup,
  Chip,
  CircularProgress,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import useAllUsersInfo from "../../../hooks/useAllUsersInfo";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { Block, FiberManualRecord } from "@mui/icons-material";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import swal from "sweetalert";

const AllUsers = () => {
  const [allUnfilteredUsers, usersLoading, refetch] = useAllUsersInfo();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const axiosSecure = useAxiosSecure();
  let [allUsers, setAllBlogs] = useState(allUnfilteredUsers);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleUpdateStatus = (user, status) => {
    swal({
      title: "Are you sure?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axiosSecure.patch(
          `/api/v1/updateStatus/${user._id}`,
          {
            status,
          }
        );
        // console.log(res.data)
        if (res.data.modifiedCount) {
          refetch();
          toast.success(`${user.name}'s status updated successfully!`);
        }
      } else {
        toast.error(`${user.name}'s status updated cancelled!`);
      }
    });
  };

  const handleUpdateRole = async (user, role) => {
    // console.log(user, role);

    swal({
      title: "Are you sure?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axiosSecure.patch(`/api/v1/updateRole/${user._id}`, {
          role,
        });
        // console.log(res.data)
        if (res.data.modifiedCount) {
          refetch();
          toast.success(`${user.name}'s role updated successfully!`);
        }
      } else {
        toast.error(`${user.name}'s role updating cancelled!`);
      }
    });
  };

  const handleFilter = (options) => {
    if (options === "all") {
      setAllBlogs(allUnfilteredUsers);
    } else {
      if (options === "active") {
        const active = allUnfilteredUsers.filter((user) => {
          return user.status === "active";
        });
        console.log(active);
        setAllBlogs(active);
      } else {
        const blocked = allUnfilteredUsers.filter((user) => {
          return user.status === "blocked";
        });
        console.log(blocked);
        setAllBlogs(blocked);
      }
    }
  };

  if (usersLoading)
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
  //   console.log(allUsers);
  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <SectionTitle
          title="All Users"
          subtitle="Here goes all the users of the site"
        />
      </div>
      <Grid mt={7} display={"flex"} alignItems={"center"} gap={2}>
        <Typography variant="h5" fontSize={"20px"} fontWeight={"700"}>
          Filter:{" "}
        </Typography>

        <TextField
          id="outlined-select-currency"
          select
          // onChange={() => handleFilter()}
          sx={{ minWidth: "150px" }}
          defaultValue="all"
          size="small"
        >
          <MenuItem
            onClick={() => {
              handleFilter("all");
            }}
            value="all"
          >
            All
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilter("active");
            }}
            value="active"
          >
            Active
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilter("blocked");
            }}
            value="blocked"
          >
            Blocked
          </MenuItem>
        </TextField>
      </Grid>
      <TableContainer component={Paper} sx={{ mt: 7 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "secondary.main", color: "white" }}>
              <TableCell sx={{ color: "white", fontWeight: "700" }}>
                Profile Picture
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "700" }}
                align="left"
              >
                User Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "700" }}>
                User Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "700" }}>
                Status
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "700" }}>
                Role
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "700" }}
                align="center"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers?.length > 0
              ? allUsers
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt={user.name} src={user.image} />
                      </TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.status === "active" ? (
                          <Chip
                            label="Active"
                            color="success"
                            size="small"
                            icon={<FiberManualRecord />}
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label="Blocked"
                            color="error"
                            variant="outlined"
                            icon={<Block />}
                            size="small"
                          />
                        )}
                      </TableCell>
                      <TableCell>{user?.role}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          size="small"
                          aria-label="small button group"
                        >
                          {user.status === "active" ? (
                            <Button
                              onClick={() =>
                                handleUpdateStatus(user, "blocked")
                              }
                              color="error"
                              variant="contained"
                            >
                              Block
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleUpdateStatus(user, "active")}
                              color="success"
                              variant="contained"
                            >
                              Activate
                            </Button>
                          )}
                          {user.role === "donor" ? (
                            <>
                              <Button
                                onClick={() => handleUpdateRole(user, "admin")}
                                color="info"
                                variant="contained"
                              >
                                Make Super-Admin
                              </Button>
                              <Button
                                onClick={() =>
                                  handleUpdateRole(user, "volunteer")
                                }
                                color="warning"
                                variant="contained"
                              >
                                Make Admin
                              </Button>
                            </>
                          ) : user.role === "admin" ? (
                            <Button
                              onClick={() =>
                                handleUpdateRole(user, "superAdmin")
                              }
                              color="info"
                              variant="contained"
                            >
                              Make Super-Admin
                            </Button>
                          ) : (
                            ""
                          )}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
              : allUnfilteredUsers
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((user) => (
                    <TableRow
                      key={user._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt={user.name} src={user.image} />
                      </TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>

                      <TableCell>
                        {user.status === "active" ? (
                          <Chip
                            label="Active"
                            color="success"
                            size="small"
                            icon={<FiberManualRecord />}
                            variant="outlined"
                          />
                        ) : (
                          <Chip
                            label="Blocked"
                            color="error"
                            variant="outlined"
                            icon={<Block />}
                            size="small"
                          />
                        )}
                      </TableCell>
                      <TableCell>{user?.role}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          size="small"
                          aria-label="small button group"
                        >
                          {user.status === "active" ? (
                            <Button
                              onClick={() =>
                                handleUpdateStatus(user, "blocked")
                              }
                              color="error"
                              variant="contained"
                            >
                              Block
                            </Button>
                          ) : (
                            <Button
                              onClick={() => handleUpdateStatus(user, "active")}
                              color="success"
                              variant="contained"
                            >
                              Activate
                            </Button>
                          )}
                          {user.role === "user" ? (
                            <>
                              <Button
                                onClick={() =>
                                  handleUpdateRole(user, "superAdmin")
                                }
                                color="info"
                                variant="contained"
                              >
                                Make Super-Admin
                              </Button>
                              <Button
                                onClick={() =>
                                  handleUpdateRole(user, "volunteer")
                                }
                                color="warning"
                                variant="contained"
                              >
                                Make Admin
                              </Button>
                            </>
                          ) : user.role === "admin" ? (
                            <Button
                              onClick={() =>
                                handleUpdateRole(user, "superAdmin")
                              }
                              color="info"
                              variant="contained"
                            >
                              Make Super-Admin
                            </Button>
                          ) : (
                            ""
                          )}
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 8, 12]}
        component="div"
        count={allUsers?.length || allUnfilteredUsers?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default AllUsers;
