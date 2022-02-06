import React from "react";
import styled from "styled-components";
const EmptyCart = () => {
  return <Cart>Cart is empty</Cart>;
};

export default EmptyCart;

const Cart = styled.div`
  position: absolute;
  bottom: -140px;
  width: 296px;
  height: 100px;
  border: 8px solid #1ea4ce;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: white;
  color: #6f6f6f;
  cursor: initial;
`;
