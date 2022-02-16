import React from "react";
import Sidebar from "../../components/Sidebar";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <h1>Dashboard</h1>
      </Content>
    </Container>
  );
};

export default Dashboard;
