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

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
function Products() {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
          {arr.map((item) => (
            <Grid xs={11} md={6} lg={3}>
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
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://img.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg?size=626&ext=jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text"
                        sx={{
                          mt: "10px",
                          p: "0",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        $550
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
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
                      sx={{ px: "30px", mr: "10px", ml: "0px" }}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      disabled
                      variant="contained"
                      sx={{ px: "5px", mx: "10px" }}
                    >
                      0
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="contained"
                      sx={{ px: "30px", ml: "10px" }}
                    >
                      +
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Pagination count={10} />
      </Container>
    </>
  );
}

export default Products;
