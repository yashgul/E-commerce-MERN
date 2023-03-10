import { useState, useEffect } from "react";
import { Typography, Container, Autocomplete, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { countries } from "../../assets/countryList";
import Button from "@mui/material/Button";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function OrderSummary({ cost, setCost, cart, setCart, toast }) {
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    axios
      .post("http://localhost:5000/cart/checkout/" + userdata.id)
      .then(function (response) {
        console.log(response);
        toast.success("Your order has been confirmed", { theme: "colored" });
        navigate("../products");
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.error, { theme: "colored" });
      });
  };

  return (
    <>
      <Container
        sx={{ minHeight: "90vh", p: 2 }}
        className="order-summary-background"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" sx={{ m: 2 }}>
            Order Summary
          </Typography>

          <hr></hr>
          <Grid
            container
            sx={{ p: 2 }}
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid xs={12}>
              <Typography>
                The country may determine the shipping fee
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Autocomplete
                fullWidth
                id="country-select-demo"
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                defaultValue={{
                  code: "US",
                  label: "United States",
                  phone: "1",
                  suggested: true,
                }}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Country of residence"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>

            <Grid xs={12}>
              <Controller
                name={"address"}
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
                    id="outlined-basic"
                    label="Address"
                    variant="filled"
                    inputRef={ref}
                    error={invalid}
                    helperText={errors.address ? errors.address.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12} sx={{ mt: 3 }}>
              <Typography>
                Some payment methods may depend on location
              </Typography>
            </Grid>
            <Grid xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Payment Method
                </InputLabel>
                <Controller
                  control={control}
                  name="paymentmethod"
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
                      label="Payment Method"
                      inputRef={ref}
                      error={invalid}
                      helperText={
                        errors.paymentmethod ? errors.paymentmethod.message : ""
                      }
                    >
                      <MenuItem value={0}>Credit Card</MenuItem>
                      <MenuItem value={1}>Debit Card</MenuItem>
                      <MenuItem value={2}>Cash on Delivery</MenuItem>
                      <MenuItem value={3}>UPI</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid xs={10} sx={{ mt: 4 }}>
              <Typography>
                {"Subtotal ( " + cart?.length + "  items)"}
              </Typography>
            </Grid>
            <Grid xs={2} sx={{ mt: 4 }}>
              <Typography>{"$" + cost}</Typography>
            </Grid>
            <Grid xs={10}>
              <Typography>CGST</Typography>
            </Grid>
            <Grid xs={2}>
              <Typography>{"$" + (cost * 5) / 100}</Typography>
            </Grid>

            <Grid xs={10}>
              <Typography>Total</Typography>
            </Grid>
            <Grid xs={2}>
              <Typography>{"$" + (cost * 105) / 100}</Typography>
            </Grid>

            <Grid
              item
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ textTransform: "none", minWidth: "10vw" }}
                type="submit"
              >
                Checkout
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default OrderSummary;
