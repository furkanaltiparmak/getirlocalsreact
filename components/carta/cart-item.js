// Modules
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// Icons
import Minus from "../icons/minus";
import Plus from "../icons/plus";
// Store Actions
import { addProduct, removeProduct } from "../../store/slices/cartSlice";
// Styled Components
import { FlexContainer } from "../styled/shared";
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
          <ButtonWrapper onClick={() => onRemoveClick()}>
            <Minus />
          </ButtonWrapper>
          <Quantity>
            <span>{amount}</span>
          </Quantity>
          <ButtonWrapper onClick={() => onAddClick()}>
            <Plus />
          </ButtonWrapper>
        </div>
      </ItemWrapper>
      <Divider />
    </>
  );
};

export default CartItem;

export const ItemWrapper = styled.div`
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
`;

export const Quantity = styled(FlexContainer)`
  background-color: #1ea4ce;
  width: 32px;
  height: 32px;
  font-weight: bold;
  margin-left: 4px;
  margin-right: 4px;
  span {
    color: var(--main-white-color);
  }
`;

export const ButtonWrapper = styled(FlexContainer)`
  height: 100%;
  width: 21px;
  cursor: pointer;
`;

export const Divider = styled.span`
  display: flex;
  width: 231px;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 16px;
  margin-bottom: 16px;
`;
