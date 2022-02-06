// Modules
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// Icons
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
// Store Actions
import { addProduct, removeProduct } from "../../store/slices/cartSlice";
const CartItem = ({ name, price, amount, slug }) => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    const cartItem = { price, name, slug, amount: 1 };
    dispatch(addProduct(cartItem));
  };

  const onRemoveClick = () => {
    dispatch(removeProduct(slug));
  };
  return (
    <>
      <ItemWrapper>
        <div>
          <p>{name}</p>
          <span className="price">₺{price}</span>
        </div>
        <div className="quantityContainer">
          <div className="buttonWrapper" onClick={() => onRemoveClick()}>
            <Minus />
          </div>
          <div className="quantity">
            <span>{amount}</span>
          </div>
          <div className="buttonWrapper" onClick={() => onAddClick()}>
            <Plus />
          </div>
        </div>
      </ItemWrapper>
      <Divider />
    </>
  );
};

export default CartItem;

const ItemWrapper = styled.div`
  width: 231px;
  display: flex;
  justify-content: space-between;
  cursor: initial;
  height: 41px;

  div {
    color: black;
  }
  p {
    margin: 0px;
  }
  .buttonWrapper {
    height: 100%;
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .quantityContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 74px;
    height: 33px;
  }
  .price {
    color: #1ea4ce;
    font-weight: 500;
  }
  .quantity {
    background-color: #1ea4ce;
    color: white;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const Divider = styled.span`
  display: flex;
  width: 231px;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 16px;
  margin-bottom: 16px;
`;
