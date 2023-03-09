import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "../navbar/Navbar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import axios from "axios";
import { motion } from "framer-motion";

function Products() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/products/userproducts/63c9824c124827290c04bc02"
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setItems(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth={false}>
        <Grid
          container
          spacing={6}
          sx={{ p: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          {items.map((item) => (
            <Grid xs={11} md={6} lg={4} xl={3} key={item._id}>
              <motion.div
                initial="hidden"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                    },
                  },
                }}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Badge badgeContent={item.quantity} color="warning">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg?size=626&ext=jpg"
                        alt="green iguana"
                      />
                      <CardContent className="cardbg" sx={{ bgcolor: "#333" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            textAlign: "center",
                          }}
                          className="cardhead"
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: "center",
                          }}
                          className="cardtext"
                        >
                          {item.about}
                        </Typography>
                        <Typography
                          variant="h6"
                          className="cardtext"
                          sx={{
                            mt: "10px",
                            p: "0",
                            display: "block",
                            textAlign: "center",
                          }}
                        >
                          ${item.cost}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      className="cardbg"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        m: "0",
                        pb: "10",
                      }}
                    >
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        disabled={item.quantityInCart > 0 ? false : true}
                        sx={{ px: "30px", mr: "10px", ml: "0px" }}
                        onClick={() => {
                          const newProductList = items.map((newitem) => {
                            if (newitem._id !== item._id) {
                              return newitem;
                            } else {
                              return {
                                ...item,
                                quantityInCart: newitem.quantityInCart - 1,
                              };
                            }
                          });

                          setItems(newProductList);

                          axios
                            .post(
                              "http://localhost:5000/cart/removeItem/63c9824c124827290c04bc02",
                              {
                                pid: item._id,
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
                        size="small"
                        disabled
                        variant="contained"
                        sx={{
                          px: "5px",
                          mx: "10px",
                          bgcolor: "gray!important",
                          color: "white!important",
                        }}
                      >
                        {item.quantityInCart}
                      </Button>
                      <Button
                        size="small"
                        color="success"
                        variant="contained"
                        sx={{ px: "30px", ml: "10px" }}
                        onClick={() => {
                          const newProductList = items.map((newitem) => {
                            if (newitem._id !== item._id) {
                              return newitem;
                            } else {
                              return {
                                ...item,
                                quantityInCart: newitem.quantityInCart + 1,
                              };
                            }
                          });

                          setItems(newProductList);

                          // Re-render with the new array

                          axios
                            .post(
                              "http://localhost:5000/cart/addItem/63c9824c124827290c04bc02",
                              {
                                pid: item._id,
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
                    </CardActions>
                  </Card>
                </Badge>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Products;
