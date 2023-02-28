import { useEffect, useState } from "react";
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
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/cart/63c9824c124827290c04bc02")
      .then(function (response) {
        // handle success
        console.log(response?.data?.data?.[0].cart);
        setCart(response?.data?.data?.[0].cart);
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
        <Grid container sx={{ pt: 6 }}>
          <Grid xs={12} md={8}>
            <CartItems cart={cart} />
          </Grid>
          <Grid xs={12} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
