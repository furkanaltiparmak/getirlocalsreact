//Modules
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//Next Modules
import Image from "next/image";
//Store Actions
import { addProduct } from "../../store/slices/cartSlice";
//Styled Components
import { FlexContainer } from "../styled/shared";

const Product = ({ random, price, name, slug }) => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    const cartItem = { price, name, slug, amount: 1 };
    dispatch(addProduct(cartItem));
  };

  return (
    <ProductWrapper>
      <ImageContainer>
        <Image
          alt={slug}
          src={`https://picsum.photos/124/124?random=${random}`}
          width={92}
          height={92}
        />
      </ImageContainer>
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

  .image {
    width: 92px;
    height: 92px;
  }
  .price {
    color: var(--main-blue-color);
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
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-blue-color);
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

export const ImageContainer = styled(FlexContainer)`
  width: 124px;
  height: 124px;
  border-radius: 12px;
  border: 2px solid #f3f0fe;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
