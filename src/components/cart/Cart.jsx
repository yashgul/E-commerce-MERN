import { useState } from "react";
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
function Cart() {
  return (
    <>
      <Navbar />
      <Container maxWidth={false}>
        <Grid container sx={{ pt: 6 }}>
          <Grid xs={12} md={9}>
            <CartItems />
          </Grid>
          <Grid xs={12} md={3}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
