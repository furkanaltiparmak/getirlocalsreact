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
          <div className="buttonWrapper flex" onClick={() => onRemoveClick()}>
            <Minus />
          </div>
          <div className="quantity flex">
            <span>{amount}</span>
          </div>
          <div className="buttonWrapper flex" onClick={() => onAddClick()}>
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
    color: var(--main-blue-color);
    font-weight: 500;
  }
  .quantity {
    background-color: #1ea4ce;
    color: var(--main-white-color);
    width: 32px;
    height: 32px;
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
