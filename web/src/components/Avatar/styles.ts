import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  background: linear-gradient(0.9turn, var(--secondary), var(--primary-dark));
  border-radius: 50%;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: var(--primary-dark);
  border-radius: 50%;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
