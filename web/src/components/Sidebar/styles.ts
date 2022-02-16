import styled from "styled-components";

export const Container = styled.aside`
  width: 200px;
  height: 100vh;
  background: var(--primary-dark);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 10%;
  text-align: center;

  strong {
    color: var(--white);
  }
`;

export const Category = styled.button.attrs(
  (props: { isSelected: boolean }) => props
)`
  height: 5%;
  margin: 2px 0;
  background: transparent;
  border: none;
  border-right: 5px solid
    ${(props) =>
      props.isSelected ? "var(--secondary-light)" : "var(--text-body)"};
  padding: 0 10px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;

  span {
    margin-left: 10px;
    opacity: 0.8;
    color: var(--white);
  }

  svg {
    color: ${(props) =>
      props.isSelected ? "var(--secondary-light)" : "var(--text-body)"};
  }

  :hover {
    opacity: 0.8;
    svg {
      color: var(--secondary-light);
    }
  }
`;
