//Modules
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//Icon
import Lock from "../icons/Lock";
//Components
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
// Functions
import { getTotalPrice } from "../../utils/functions";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <CartContainer>
      <div className="cartBtn" onClick={() => setIsCartOpen(!isCartOpen)}>
        <Lock />
        <span>₺ {getTotalPrice(cart)}</span>
      </div>
      {isCartOpen ? (
        cart.length > 0 ? (
          <Cart>
            <div className="cartItemWrapper">
              {cart.map((item) => (
                <CartItem {...item} />
              ))}
            </div>
            <TotalPrice>
              <span>₺{getTotalPrice(cart)}</span>
            </TotalPrice>
          </Cart>
        ) : (
          <EmptyCart />
        )
      ) : null}
    </CartContainer>
  );
};

export default ShoppingCart;

const CartContainer = styled.div`
  grid-column-start: 12;
  background-color: #147594;
  width: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
  .cartBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    width: 81px;
  }
`;

const Cart = styled.div`
  position: absolute;
  bottom: -380px;
  width: 296px;
  height: 339px;
  padding-top: 27px;
  border: 8px solid #1ea4ce;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  background-color: white;
  cursor: initial;
  .cartItemWrapper {
    height: 228px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: #e0e0e0;
      border-radius: 4px;
    }
  }
`;

const TotalPrice = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 231px;
  bottom: 16px;
  span {
    border: 2px solid #1ea4ce;
    color: #1ea4ce;
    padding: 16px;
    width: 92px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
  }
`;
