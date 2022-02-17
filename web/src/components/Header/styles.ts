import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: var(--primary-dark);
  z-index: 2;
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  img {
    height: 40px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--white);
  margin: 0 10px;
`;

export const Line = styled.div`
  background: var(--text-title);
  width: 1px;
  height: 40px;
  margin: 0 10px;
`;
