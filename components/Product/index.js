import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

const Products = () => {
  const typesList = useSelector((state) => state.productReducer.types);

  return (
    <Container>
      <h1 className="title">Products</h1>
      <div className="filter">
        {typesList.map((type, key) => (
          <span key={key} className="button">
            {type}
          </span>
        ))}
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
    font-weight: 600;
    background-color: #f2f0fd;
    color: #1ea4ce;
    margin-left: 4px;
    &:hover {
      cursor: pointer;
    }
  }

  .typeSelected {
    background-color: #1ea4ce;
    color: white;
    margin-right: 4px;
  }
`;
