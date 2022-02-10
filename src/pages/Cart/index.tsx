import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";

interface Props {
  cart: any;
  handleUpdateCardQuantity: (productId: string, quantity: number) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleEmptyCart: () => void;
}

const Cart: React.FC<Props> = ({
  cart,
  handleUpdateCardQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? (
        <Typography variant="subtitle1">
          You have no items in your shopping cart,{" "}
          <Link to="/" className={classes.link}>
            start adding some!
          </Link>
        </Typography>
      ) : (
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
                onClick={() => handleEmptyCart()}
              >
                Empty Cart
              </Button>
              <Button
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                component={Link}
                to="/checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
