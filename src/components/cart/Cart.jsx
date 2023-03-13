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

function Cart({ toast }) {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);

  let userdata = "";
  useEffect(() => {
    userdata = JSON.parse(localStorage.getItem("userdata"));
    axios
      .get("http://localhost:5000/cart/cart/" + userdata.id)
      .then(function (response) {
        // handle success
        console.log(response);
        setCart(response?.data?.data?.cart);
        setCost(response?.data?.cost);
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
            <CartItems
              cart={cart}
              setCart={setCart}
              cost={cost}
              setCost={setCost}
            />
          </Grid>
          <Grid xs={12} md={4}>
            <OrderSummary
              toast={toast}
              cart={cart}
              setCart={setCart}
              cost={cost}
              setCost={setCost}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
