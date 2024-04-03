import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const SignIn = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: "8vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form style={{ width: "100%", marginTop: "1rem" }} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ margin: "2rem 0 1rem" }}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
