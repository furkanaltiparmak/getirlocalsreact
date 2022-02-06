// Modules
import React from "react";
import styled from "styled-components";

const EmptyCart = () => {
  return <Cart className="flex">Cart is empty</Cart>;
};

export default EmptyCart;

const Cart = styled.div`
  position: absolute;
  bottom: -140px;
  width: 296px;
  height: 100px;
  border: 8px solid var(--main-blue-color);
  right: 0;
  flex-direction: column;
  font-size: 20px;
  background-color: var(--main-white-color);
  color: var(--main-dark-color);
  cursor: initial;
`;
