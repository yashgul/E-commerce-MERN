import { useState, useEffect } from "react";
import { Typography, Container, CardMedia, Button, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";
function CartItems({ cost, setCost, cart, setCart }) {
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
          {cart.map((item) => {
            return (
              item.quantity > 0 && (
                <>
                  <Grid xs={10} md={4} key={item.pid}>
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
                      onClick={() => {
                        const newProductList = cart.map((newitem) => {
                          console.log(newitem._id, item._id);
                          if (newitem._id !== item._id) {
                            return newitem;
                          } else {
                            setCost((prev) => prev - item.cost);
                            return {
                              ...item,
                              quantity: newitem.quantity - 1,
                            };
                          }
                        });

                        setCart(newProductList);
                        console.log("item", item);
                        axios
                          .post(
                            "http://localhost:5000/cart/removeItem/" +
                              userdata.id,
                            {
                              pid: item.pid,
                            }
                          )
                          .then(function (response) {
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
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
                      {item.quantity}
                    </Button>
                    <Button
                      size="large"
                      color="success"
                      variant="contained"
                      sx={{ p: 0, m: 0 }}
                      onClick={() => {
                        const newProductList = cart.map((newitem) => {
                          if (newitem._id !== item._id) {
                            return newitem;
                          } else {
                            setCost((prev) => prev + item.cost);
                            return {
                              ...item,
                              quantity: newitem.quantity + 1,
                            };
                          }
                        });

                        setCart(newProductList);

                        // Re-render with the new array

                        axios
                          .post(
                            "http://localhost:5000/cart/addItem/" + userdata.id,
                            {
                              pid: item.pid,
                              name: item.name,
                              cost: item.cost,
                            }
                          )
                          .then(function (response) {
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
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
              )
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default CartItems;
