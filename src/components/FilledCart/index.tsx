import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "../CartItem";

import useStyles from "./styles";

interface Props {
  cart: any;
}

const FilledCart: React.FC<Props> = ({ cart }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem cart={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="subtitle1">
          <b>Subtotal:</b> {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilledCart;
