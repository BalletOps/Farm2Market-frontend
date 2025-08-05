"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    console.log("Uploaded photo:", photo);
    // Send formData and photo to backend
  };

  const inputStyles = {
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
  };

  return (
    <Container
      sx={{
        width: "40rem",
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#154015" }}
        >
          Register for Farm2Market
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                required
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{ style: { color: "black" } }}
                sx={inputStyles}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                required
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "black" } }}
                InputProps={{ style: { color: "black" } }}
                sx={inputStyles}
              />
            </Grid>
          </Grid>

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black" } }}
            sx={inputStyles}
          />

          <TextField
            label="Phone"
            name="phone"
            type="tel"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black" } }}
            sx={inputStyles}
          />

          <TextField
            label="Address"
            name="address"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "black" } }}
            InputProps={{ style: { color: "black" } }}
            sx={inputStyles}
          />

          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            value={formData.dob}
            onChange={handleChange}
            InputLabelProps={{ shrink: true, style: { color: "black" } }}
            InputProps={{ style: { color: "black" } }}
            sx={inputStyles}
          />

          {/* Upload Profile Picture */}
          <Box mt={2} display="flex" alignItems="center" gap={2}>
            {photoPreview && (
              <Avatar
                src={photoPreview}
                alt="Preview"
                sx={{ width: 56, height: 56 }}
              />
            )}
            <Button
              variant="outlined"
              component="label"
              sx={{
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
              Upload Profile Photo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoChange}
              />
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              backgroundColor: "#388E3C",
              "&:hover": {
                backgroundColor: "#186818ff",
              },
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Button>

          <Button
            onClick={() => router.push("/login")}
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
            Already have an account? Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
