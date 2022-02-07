//Modules
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//Icon
import Lock from "../icons/lock";
//Components
import EmptyCart from "./empty-cart";
import CartItem from "./cart-item";
// Functions
import { getTotalPrice } from "../../utils/functions";
// Styled Components
import { Cart } from "../styled/cart";
import { FlexContainer } from "../styled/shared";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContainer>
      <FlexContainer
        className="cartBtnWrapper"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <div className="cartBtn">
          <Lock />
          <span>₺ {getTotalPrice(cart)}</span>
        </div>
      </FlexContainer>
      {isCartOpen ? (
        cart.length > 0 ? (
          <CartWithItems>
            <div className="cartItemWrapper">
              {cart.map((item, key) => (
                <CartItem key={key} {...item} />
              ))}
            </div>
            <TotalPrice>
              <span>₺{getTotalPrice(cart)}</span>
            </TotalPrice>
          </CartWithItems>
        ) : (
          <EmptyCart />
        )
      ) : null}
    </CartContainer>
  );
};

export default ShoppingCart;

const CartContainer = styled(FlexContainer)`
  grid-column-start: 12;
  background-color: #147594;
  width: 129px;
  position: relative;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1280px) {
    grid-column-start: 11;
  }
  @media (max-width: 1160px) {
    grid-column-start: 10;
  }
  @media (max-width: 1060px) {
    grid-column-start: 8;
  }
  @media (max-width: 960px) {
    width: 90px;
  }
  .cartBtnWrapper {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 77px;
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

const CartWithItems = styled(Cart)`
  padding-top: 27px;
  @media (max-width: 960px) {
    bottom: -350px;
  }
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
    border: 2px solid var(--main-blue-color);
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
