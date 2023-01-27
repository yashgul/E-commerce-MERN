import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Navbar from "../navbar/Navbar";

import { Button, FormControl, Typography } from "@mui/material";
import {
  TextField,
  Select,
  MenuItem,
  Card,
  InputLabel,
  Box,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { NavLink } from "react-router-dom";
function Login() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <Card
        className="order-summary-background"
        sx={{
          width: { xs: "100vw", md: "30vw" },
          margin: "auto",
          mt: 6,
          p: 6,
        }}
      >
        <Typography variant="h3" sx={{ mb: 1 }}>
          Login
        </Typography>

        <Typography variant="body" sx={{ color: "gray" }}>
          You must log in to add items to your cart
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} sx={{ pt: 3 }}>
            <Grid xs={12}>
              <Controller
                name={"email"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "The email address is invalid",
                  },
                }}
                render={({
                  field: { ref, onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    label={"Email Address"}
                    inputRef={ref}
                    error={invalid}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12}>
              <Controller
                name={"pwd1"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                }}
                render={({
                  field: { ref, onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    label={"Password"}
                    inputRef={ref}
                    error={invalid}
                    type="password"
                    helperText={errors.pwd1 ? errors.pwd1.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Controller
                  control={control}
                  name="role"
                  defaultValue={0}
                  rules={{
                    required: "This is a required field",
                  }}
                  render={({
                    field: { ref, onChange, value },
                    fieldState: { invalid, error },
                  }) => (
                    <Select
                      onChange={onChange}
                      value={value}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Role"
                      inputRef={ref}
                      error={invalid}
                      helperText={errors.role ? errors.role.message : ""}
                    >
                      <MenuItem value={0}>User</MenuItem>
                      <MenuItem value={1}>Admin</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ width: { xs: "100%", md: "30%" } }}
              >
                Submit
              </Button>
            </Grid>

            <Grid xs={12}>
              <Typography variant="body" sx={{ mt: 3 }}>
                Havent created an account yet?{" "}
                <NavLink style={{ textDecoration: "none" }} to="../login">
                  Register
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}

export default Login;
