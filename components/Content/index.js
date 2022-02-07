//Modules
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
//Store Actions
import { getProductsSuccess } from "../../store/slices/productSlice";
import { getTags, getTypes, getBrands } from "../../store/slices/filterSlice";
//Components
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
    @media (max-width: 1160px) {
      grid-template-columns: repeat(10, 88px);
    }
    @media (max-width: 1060px) {
      grid-template-columns: repeat(9, 88px);
    }
    @media (max-width: 960px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;
