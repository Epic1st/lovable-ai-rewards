import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  Grid,
} from "@mui/material";

const Signup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
        padding: "1rem",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "2.5rem",
          borderRadius: "12px",
          backgroundColor: "#1a1a1a",
          width: "100%",
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Sign Up
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            marginBottom: "2rem",
          }}
        >
          Create an account to start your journey with us.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "#262626",
                borderRadius: "6px",
              },
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "#262626",
                borderRadius: "6px",
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "#262626",
                borderRadius: "6px",
              },
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{
              style: {
                color: "#fff",
                backgroundColor: "#262626",
                borderRadius: "6px",
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#6a0dad",
              color: "#fff",
              fontWeight: "bold",
              padding: "0.75rem",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#5a0ca0",
              },
            }}
          >
            Create Account
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#ccc",
            marginTop: "1.5rem",
          }}
        >
          Already have an account?{" "}
          <Link href="/login" sx={{ color: "#6a0dad", fontWeight: "bold" }}>
            signup
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;

