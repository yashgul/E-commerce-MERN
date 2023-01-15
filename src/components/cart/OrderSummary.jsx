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
function OrderSummary() {
  const [age, setAge] = useState("");

  return (
    <>
      <Container sx={{ bgcolor: "#f5f5f5", minHeight: "90vh", p: 2 }}>
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
            <Typography>The country may determine the shipping fee</Typography>
          </Grid>
          <Grid xs={12}>
            <Autocomplete
              fullWidth
              id="country-select-demo"
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
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
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Address"
              multiline
              maxRows={4}
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 4 }}>
            <Typography>Some payment methods may depend on location</Typography>
          </Grid>
          <Grid xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Payment Method
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Payment Method"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} sx={{ mt: 4 }}>
            <Typography>Do you have a discount code?</Typography>
          </Grid>

          <Grid xs={10}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Apply code here"
              variant="outlined"
            />
          </Grid>
          <Grid xs={2}>
            <Button variant="text" size="medium">
              Apply
            </Button>
          </Grid>

          <Grid xs={10} sx={{ mt: 4 }}>
            <Typography>{"Subtotal (2 items)"}</Typography>
          </Grid>
          <Grid xs={2} sx={{ mt: 4 }}>
            <Typography>$123</Typography>
          </Grid>
          <Grid xs={10}>
            <Typography>CGST</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>$12</Typography>
          </Grid>

          <Grid xs={10}>
            <Typography>Total</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography>$163</Typography>
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
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default OrderSummary;
