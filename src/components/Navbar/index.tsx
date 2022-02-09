import React from "react";
import {
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography>
            <img
              src="https://toppng.com/uploads/preview/justin-bieber-png-justin-bieber-2016-11562896033zct3saovir.png"
              alt="ecommerce"
              height="25px"
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
