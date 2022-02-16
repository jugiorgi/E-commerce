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
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

import useStyles from "./styles";

interface Props {
  totalItems: number;
}

const Navbar: React.FC<Props> = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.menuButton}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;