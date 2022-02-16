import React from "react";

import Avatar from "../Avatar";

import { MdLogout } from "react-icons/md";
import drew from "../../assets/drew.png";

import { Container, Content, Profile, ProfileText, Line } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={drew} alt="E-commerce" />

        <Profile>
          <ProfileText>
            <span>Seja bem-vindo</span>
            <strong>Justin Bieber</strong>
          </ProfileText>

          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6fHlTtbogkB9WHZ7GBRnpdNJVtVkviXskw&usqp=CAU" />
          <Line />
          <MdLogout size={24} color="#363f5f" />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
