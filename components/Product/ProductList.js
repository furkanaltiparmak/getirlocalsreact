//Modules
import React from "react";
import styled from "styled-components";
// Next Modules
import Image from "next/image";
//Components
import Pagination from "../Pagination";
const ProductList = () => {
  return (
    <div>
      <Container>
        <div className="gridFourColumn">
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
          <Product>
            <div className="imageContainer">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
              ></img>
            </div>
            <span className="price">
              <span>₺ </span>14.99
            </span>
            <h1 className="name">Gorgeous Office Mug</h1>
            <a className="productButton">Add</a>
          </Product>
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
    font-weight: 500;
    span {
      font-weight: 400;
    }
  }
  .name {
    color: #191919;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 9px;
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
