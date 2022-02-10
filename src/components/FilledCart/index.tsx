import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartItem from "../CartItem";

import useStyles from "./styles";

interface Props {
  cart: any;
  handleUpdateCardQuantity: (productId: string, quantity: number) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleEmptyCart: () => void;
}

const FilledCart: React.FC<Props> = ({
  cart,
  handleUpdateCardQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {cart.line_items.map((item: any) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
            <CartItem
              cart={item}
              handleUpdateCardQuantity={handleUpdateCardQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
            />
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
            onClick={() => handleEmptyCart()}
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
