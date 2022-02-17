import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export const Container = styled(Card)`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;

export const Image = styled(CardMedia)`
  height: 150px;
  margin-bottom: 10px;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
