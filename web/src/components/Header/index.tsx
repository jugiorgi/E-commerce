import React from "react";
import { MdLogout, MdShoppingCart } from "react-icons/md";
import logo from "../../assets/logo.png";
import Avatar from "../Avatar";
import { Container, Content, Profile, ProfileText, Line } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Link, useLocation } from "react-router-dom";
import { Badge, IconButton } from "@mui/material";

const Header: React.FC = () => {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="E-commerce" />
        </Link>

        <Profile>
          <ProfileText>
            <span>Seja bem-vindo</span>
            <strong>Julia Giorgi</strong>
          </ProfileText>

          <Avatar url="https://64.media.tumblr.com/6fd045c6d229801e5214e48f76230833/c9b92d7eb948b99b-f3/s540x810/38f42300d82bd8a0b40bcfc6214b2719b6018a05.jpg" />
          {location.pathname === "/" && (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={cart.length} color="error">
                  <MdShoppingCart size={24} color="#FFF" />
                </Badge>
              </IconButton>
            </div>
          )}
          <Line />
          <MdLogout size={24} color="#363f5f" />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
