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
function Register() {
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
        sx={{
          width: { xs: "100vw", md: "50vw" },
          margin: "auto",
          mt: 6,
          p: 6,
        }}
      >
        <Typography variant="h3" sx={{ mb: 1 }}>
          Register
        </Typography>

        <Typography variant="body" sx={{ color: "gray" }}>
          You must log in to add items to your cart
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} sx={{ pt: 3 }}>
            <Grid xs={12} md={6}>
              <Controller
                name={"firstName"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                  pattern: {
                    value: /^\S*$/,
                    message: "This field can not contain any spaces",
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
                    label={"First Name"}
                    inputRef={ref}
                    error={invalid}
                    helperText={
                      errors.firstName ? errors.firstName.message : ""
                    }
                  />
                )}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <Controller
                name={"lastName"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                  pattern: {
                    value: /^\S*$/,
                    message: "This field can not contain any spaces",
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
                    label={"Last Name"}
                    inputRef={ref}
                    error={invalid}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12} md={6}>
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

            <Grid xs={12} md={6}>
              <Controller
                name={"phoneno"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                  minLength: {
                    value: 10,
                    message: "The phone number is invalid",
                  },
                  maxLength: {
                    value: 13,
                    message: "The phone number is invalid",
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
                    label={"Phone No"}
                    inputRef={ref}
                    error={invalid}
                    helperText={errors.phoneno ? errors.phoneno.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12} md={6}>
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

            <Grid xs={12} md={6}>
              <Controller
                name={"pwd2"}
                control={control}
                defaultValue=""
                rules={{
                  required: "This is a required field",
                  validate: (val) => {
                    if (watch("pwd1") != val) {
                      return "Your passwords do no match";
                    }
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
                    label={"Confirm Password"}
                    inputRef={ref}
                    error={invalid}
                    type="password"
                    helperText={errors.pwd2 ? errors.pwd2.message : ""}
                  />
                )}
              />
            </Grid>

            {/* <Grid xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Controller
                  defaultValue={10}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                    >
                      <MenuItem disabledvalue={10}>Ten</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  )}
                  name="Select"
                  control={control}
                />
              </FormControl>
            </Grid> */}

            <Grid xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ width: { xs: "100%", md: "20%" } }}
              >
                Submit
              </Button>
            </Grid>

            <Grid xs={12}>
              <Typography variant="body" sx={{ mt: 3 }}>
                Already have an account?{" "}
                <NavLink style={{ textDecoration: "none" }} to="../login">
                  Log in
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}

export default Register;
