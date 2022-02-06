import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getProductsFetch,
  getTags,
  getTypes,
  getBrands,
  getProductsSuccess,
} from "../../store/slices/productSlice";
import Filters from "../Filter";
import Products from "../Product";
const Content = ({ products, tags, types, brands }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags(tags));
    dispatch(getTypes(types));
    dispatch(getBrands(brands));
    dispatch(getProductsSuccess(products));
  }, [dispatch]);

  return (
    <Container>
      <div className="grid">
        <Filters />
        <Products />
      </div>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 88px);
    gap: 16px;
  }
`;
