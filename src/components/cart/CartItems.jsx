import { useState } from "react";
import { Typography, Container, CardMedia, Button, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
function CartItems(props) {
  useEffect(() => {}, []);
  return (
    <>
      <Container sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ m: 2 }} className="carthead">
          Cart Items
        </Typography>
        <hr></hr>

        <Grid
          container
          spacing={3}
          sx={{ p: 4 }}
          alignItems="center"
          justifyContent="center"
        >
          {props.cart.map((item) => {
            return (
              <>
                <Grid xs={10} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://img.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg?size=626&ext=jpg"
                      alt="green iguana"
                    />
                  </Card>
                </Grid>

                <Grid
                  xs={12}
                  md={5}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    size="large"
                    color="error"
                    variant="contained"
                    sx={{ p: 0, m: 0 }}
                  >
                    -
                  </Button>
                  <Button
                    size="large"
                    disabled
                    variant="contained"
                    sx={{
                      p: 0,
                      mx: 2,
                      bgcolor: "gray!important",
                      color: "white!important",
                    }}
                  >
                    0
                  </Button>
                  <Button
                    size="large"
                    color="success"
                    variant="contained"
                    sx={{ p: 0, m: 0 }}
                  >
                    +
                  </Button>
                </Grid>

                <Grid xs={5} md={1}>
                  <Button
                    size="large"
                    disabled
                    variant="contained"
                    sx={{
                      p: 0,
                      mx: 2,
                      bgcolor: "gray!important",
                      color: "white!important",
                    }}
                  >
                    $13
                  </Button>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default CartItems;
