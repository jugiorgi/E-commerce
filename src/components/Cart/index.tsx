import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";
import EmptyCart from "../EmptyCart";
import FilledCart from "../FilledCart";

interface Props {
  cart: any;
}

const Cart: React.FC<Props> = ({ cart }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart cart={cart} />}
    </Container>
  );
};

export default Cart;
