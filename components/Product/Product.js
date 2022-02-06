//Modules
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//Store Actions
import { addProduct } from "../../store/slices/cartSlice";

const Product = ({ random, price, name, slug }) => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    const cartItem = { price, name, slug, amount: 1 };
    dispatch(addProduct(cartItem));
  };

  return (
    <ProductWrapper>
      <div className="imageContainer">
        <img
          className="image"
          src={`https://picsum.photos/124/124?random=${random}`}
        ></img>
      </div>
      <span className="price">
        <span>₺ </span>
        {price}
      </span>
      <h1 className="name">{name}</h1>
      <a onClick={() => onAddClick(slug)} className="productButton">
        Add
      </a>
    </ProductWrapper>
  );
};

export default Product;
const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 225px;

  .imageContainer {
    width: 124px;
    height: 124px;
    border-radius: 12px;
    border: 2px solid #f3f0fe;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .image {
    width: 92px;
    height: 92px;
  }
  .price {
    color: #1ea4ce;
    font-size: 14px;
    font-weight: 700;
    span {
      font-weight: 400;
    }
  }
  .name {
    color: #191919;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 9px;
    height: 40px;
  }
  .productButton {
    width: 100%;
    display: flex;
    height: 22px;
    background-color: #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;