import React from "react";
import { MdLogout, MdShoppingCart } from "react-icons/md";
import drew from "../../assets/drew.png";
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
          <img src={drew} alt="E-commerce" />
        </Link>

        <Profile>
          <ProfileText>
            <span>Seja bem-vindo</span>
            <strong>Justin Bieber</strong>
          </ProfileText>

          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6fHlTtbogkB9WHZ7GBRnpdNJVtVkviXskw&usqp=CAU" />
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
