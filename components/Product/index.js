//Modules
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//Components
import ProductList from "./ProductList";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { getRequestString } from "../../utils/functions";

const Products = () => {
  const typesList = useSelector((state) => state.filterReducer.types);
  const { filters } = useSelector((state) => state.filterReducer);
  const { type: selected } = filters;
  const dispatch = useDispatch();

  const onTypeSelect = (val) => {
    let filter = { ...filters, type: val, page: 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };
  return (
    <Container>
      <h1 className="title">Products</h1>
      <div className="filter">
        {typesList.map((type, key) => (
          <span
            onClick={() => onTypeSelect(type)}
            key={key}
            className={`button flex ${
              type === selected ? "typeSelected" : ""
            } `}
          >
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
  @media (max-width: 1280px) {
    grid-column-start: 5;
  }
  @media (max-width: 1160px) {
    grid-column-start: 4;
  }
  @media (max-width: 960px) {
    grid-column-start: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  .title {
    font-size: 20px;
    color: var(--main-dark-color);
    font-weight: 400;
    margin-top: 0;
  }
  .filter {
    display: flex;
    margin-bottom: 16px;
  }
  .button {
    padding: 6px;
    width: 60px;
    height: 30px;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
    background-color: #f2f0fd;
    color: #1ea4ce;
    margin-right: 8px;
    &:hover {
      cursor: pointer;
    }
  }

  .typeSelected {
    background-color: var(--main-blue-color);
    color: var(--main-white-color);
  }
`;
