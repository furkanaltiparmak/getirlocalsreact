import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
const Products = () => {
  return (
    <Container>
      <h1 className="title">Products</h1>
      <div className="filter">
        <span className="button mug">mug</span>
        <span className="button shirt">shirt</span>
      </div>
      <ProductList />
    </Container>
  );
};

export default Products;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  grid-column-start: 4;
  width: 608px;

  .title {
    font-size: 20px;
    color: #6f6f6f;
    font-weight: 400;
    margin-top: 0;
  }
  .filter {
    display: flex;
    margin-bottom: 16px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    width: 60px;
    height: 30px;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }

  .mug {
    background-color: #1ea4ce;
    color: white;
    margin-right: 4px;
  }
  .shirt {
    background-color: #f2f0fd;
    color: #1ea4ce;
    margin-left: 4px;
  }
`;
