import React from "react";
import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

const Login = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#0d0d0d",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: "2rem",
                    borderRadius: "8px",
                    backgroundColor: "#1a1a1a",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ color: "#fff", marginBottom: "1.5rem" }}
                >
                    Login to Your Account
                </Typography>
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: "#ccc" } }}
                        InputProps={{
                            style: {
                                color: "#fff",
                                backgroundColor: "#262626",
                                borderRadius: "4px",
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
                                borderRadius: "4px",
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
                            "&:hover": {
                                backgroundColor: "#5a0ca0",
                            },
                        }}
                    >
                        Login
                    </Button>
                </Box>
                <Typography
                    variant="body2"
                    sx={{ color: "#ccc", marginTop: "1rem" }}
                >
                    Don't have an account?{" "}
                    <Link href="/signup" sx={{ color: "#6a0dad" }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;