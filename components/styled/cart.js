import styled from "styled-components";

export const Cart = styled.div`
  position: absolute;
  width: 296px;
  border: 8px solid var(--main-blue-color);
  right: 0;
  background-color: var(--main-white-color);
  cursor: initial;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.empty ? "center" : "start")};
  flex-direction: ${(props) => (props.empty ? "row" : "column")};
  height: ${(props) => (props.empty ? "100px" : "339px")};
  bottom: ${(props) => (props.empty ? "-140px" : "-380px")};
  font-size: ${(props) => (props.empty ? "20px" : "14px")};
  color: ${(props) => (props.empty ? "var(--main-dark-color)" : "black")};
`;
