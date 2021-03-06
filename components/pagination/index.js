//Modules
import React, { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
//Icons
import { ArrowLeft } from "../icons/arrow-left";
import { ArrowRight } from "../icons/arrow-right";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { getRequestString } from "../../utils/functions";
// Styled Components
import { FlexContainer } from "../styled/shared";

const Pagination = () => {
  const { pages } = useSelector((state) => state.productReducer.products);
  const filters = useSelector((state) => state.filterReducer.filters);

  const [currentPage, setCurrentPage] = useState(filters.page - 1);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const filter = { ...filters, page: event.selected + 1 };
    setCurrentPage(event.selected);
    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };

  return (
    <Container>
      <ReactPaginate
        breakLabel={<div className="break-label">...</div>}
        nextLabel={
          <FlexContainer
            className={`pagBtnNext ${
              currentPage === pages - 1 ? "disable" : "enable"
            }`}
          >
            <span>Next</span>{" "}
            <ArrowRight
              color={`${currentPage === pages - 1 ? "#697488" : "#1ea4ce"}`}
            />
          </FlexContainer>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pages}
        previousLabel={
          <FlexContainer
            className={`pagBtnPrev ${currentPage === 0 ? "disable" : "enable"}`}
          >
            <ArrowLeft color={`${currentPage === 0 ? "#697488" : "#1ea4ce"}`} />{" "}
            <span>Prev</span>
          </FlexContainer>
        }
        renderOnZeroPageCount={null}
        forcePage={filters.page - 1}
      />
    </Container>
  );
};

export default Pagination;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color:#697488;
  ul{
    list-style-type:none;
    display:flex;
    width:535px;
    justify-content:space-between;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      width: 100%;
    }
    li {
      width: 32px;
      height: 40px;
      display:flex;
      justify-content:center;
      align-items:center;
      
      &:hover {
        cursor:pointer;
        color:var(--main-blue-color);
      }
      @media (max-width: 960px) {
        &:hover {
        color:white;
      }
  }
    }
  }
  .pagBtnNext{
    span{
      margin-right:7px;
      
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .pagBtnPrev{
    span{
      margin-left:7px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .disable{
    color:#697488;

  }
  .enable {
    color: var(--main-blue-color);
  }
  .selected{
    background-color: var(--main-blue-color);
    color: white;
    border-radius:2px;
    pointer-events:none;
  }
  }
  .break-label {
    @media (max-width: 960px) {
        &:hover {
        color:#697488;
      }
  }
`;
