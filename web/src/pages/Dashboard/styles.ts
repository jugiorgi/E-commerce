import Grid from "@mui/material/Grid";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;

export const Catalog = styled(Grid)`
  padding: 10px;
  list-style: none;
`;
