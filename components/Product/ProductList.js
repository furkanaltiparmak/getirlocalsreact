//Modules
import React from "react";
import styled from "styled-components";
// Next Modules
import Image from "next/image";
//Components
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import ProductSkeleton from "./ProductSkeleton";
const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.productReducer);

  return (
    <div>
      <Container>
        <div className="gridFourColumn">
          {isLoading ? (
            Array.apply(null, Array(16)).map((x, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : products.products.length > 0 ? (
            products.products.map((product, key) => (
              <Product key={key}>
                <div className="imageContainer">
                  <img
                    className="image"
                    src={`https://picsum.photos/124/124?random=${key}`}
                  ></img>
                </div>
                <span className="price">
                  <span>₺ </span>
                  {product.price}
                </span>
                <h1 className="name">{product.name}</h1>
                <a className="productButton">Add</a>
              </Product>
            ))
          ) : (
            <div className="noProduct">No Product Found</div>
          )}
        </div>
      </Container>
      <Pagination />
    </div>
  );
};

export default ProductList;

const Container = styled.div`
  padding: 20px;
  margin-bottom: 32px;
  background-color: white;
  .gridFourColumn {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 124px));
    gap: 20px 24px;
  }
  .noProduct {
    grid-column: span 4 / span 4;
    text-align: center;
    color: #6f6f6f;
  }
`;

const Product = styled.div`
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
  }
`;
