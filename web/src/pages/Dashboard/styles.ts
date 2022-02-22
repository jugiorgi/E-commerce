import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  width: 100vw;
`;

export const Catalog = styled(Grid)`
  padding: 30px;
  list-style: none;
`;

export const Product = styled(Grid)`
  padding: 20px;
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: var(--primary);
  width: 100%;
  height: 30px;
  border: none;
  margin-top: 10px;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    color: var(--white);
    font-weight: bold;

    svg {
      margin-right: 10px;
    }
  }

  span {
    color: var(--white);
    font-size: 12px;
  }

  :hover {
    opacity: 0.8;
  }
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
