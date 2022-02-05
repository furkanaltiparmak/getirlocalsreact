//Modules
import React from "react";
import styled from "styled-components";
//Icon
import Lock from "../icons/Lock";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
//Mock
const mock = {
  tags: ["Animal", "Bear"],
  price: 17.99,
  name: "Handcrafted Bear Mug",
  description: "vitae mollitia et in accusantium est voluptas officiis est non",
  slug: "Handcrafted-Bear-Mug",
  added: 1485991071829,
  manufacturer: "Weissnat-Schowalter-and-Koelpin",
  itemType: "mug",
};
const ShoppingCart = () => {
  return (
    <CartContainer>
      <Lock />
      <span>₺ 39,97</span>
      <Cart>
        <CartItem>
          <div>
            <p>Handcrafted Bear Mug</p>
            <span className="price">₺17.99</span>
          </div>
          <div className="quantityContainer">
            <Minus />
            <div className="quantity">
              <span>1</span>
            </div>
            <Plus />
          </div>
        </CartItem>
        <Divider />
        <CartItem>
          <div>
            <p>Handcrafted Bear Mug</p>
            <span className="price">₺17.99</span>
          </div>
          <div className="quantityContainer">
            <Minus />
            <div className="quantity">
              <span>1</span>
            </div>
            <Plus />
          </div>
        </CartItem>
        <Divider />
        <CartItem>
          <div>
            <p>Handcrafted Bear Mug</p>
            <span className="price">₺17.99</span>
          </div>
          <div className="quantityContainer">
            <Minus />
            <div className="quantity">
              <span>1</span>
            </div>
            <Plus />
          </div>
        </CartItem>
        <Divider />
        <div></div>
        <TotalPrice>
          <span>₺39,97</span>
        </TotalPrice>
      </Cart>
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
`;

const Cart = styled.div`
  position: absolute;
  bottom: -380px;
  width: 296px;
  height: 339px;
  border: 6px solid #1ea4ce;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: white;
`;

const CartItem = styled.div`
  width: 231px;
  display: flex;
  justify-content: space-between;

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

const TotalPrice = styled.div`
  display: flex;
  justify-content: end;
  width: 231px;
  span {
    border: 2px solid #1ea4ce;
    color: #1ea4ce;
    padding: 16px;
    width: 92px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Divider = styled.span`
  width: 231px;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 16px;
  margin-bottom: 16px;
`;
