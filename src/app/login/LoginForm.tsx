"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    //  login logic
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Container
      sx={{
        width: "30rem",
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Login Form */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#154015" }}
        >
          Login to Farm2Market
        </Typography>

        <br />

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{
              style: { color: "black" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                  borderWidth: "2px",
                },
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{
              style: { color: "black" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                  borderWidth: "2px",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#388E3C", // green
              "&:hover": {
                backgroundColor: "#186818ff",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Log In
          </Button>


          {/* Register Button with green color */}
          <Button
            onClick={handleRegister}
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              color: "#388E3C",
              borderColor: "#388E3C",
              "&:hover": {
                borderColor: "#186818ff",
                backgroundColor: "rgba(56, 142, 60, 0.1)",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            New here? Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
