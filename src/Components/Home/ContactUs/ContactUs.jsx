import { Button, Container, Grid, TextField } from "@mui/material";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// const formContainerStyle = {
//     marginTop: '20px',
//   };

const textFieldStyle = {
  marginBottom: "20px",
};

const submitButtonStyle = {
  marginTop: "20px",
};

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
  };
  return (
    <div style={{ padding: '80px 0', backgroundColor: 'rgb(229, 228, 226, 0.4)'}}>
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Contact with us as you needed"
        />
        <Grid>
          <form onSubmit={handleSubmit}>
            <Grid maxWidth={"80%"} mx={"auto"} container spacing={2} mt={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  style={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  style={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  style={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  style={textFieldStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={submitButtonStyle}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
