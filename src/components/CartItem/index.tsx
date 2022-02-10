import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

interface Props {
  cart: any;
}

const CartItem: React.FC<Props> = ({ cart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={cart.image.url}
        title={cart.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{cart.name}</Typography>
        <Typography variant="subtitle1">
          {cart.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{cart.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>

        <Button variant="contained" type="button" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;