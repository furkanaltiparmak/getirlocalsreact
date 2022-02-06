//Modules
import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
//Icons
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { getRequestString } from "../../utils/functions";

const Pagination = () => {
  const { pages } = useSelector((state) => state.productReducer.products);
  const filters = useSelector((state) => state.filterReducer.filters);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const filter = { ...filters, page: event.selected + 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };
  return (
    <Container>
      <ReactPaginate
        breakLabel={<div>...</div>}
        nextLabel={
          <div className="flex pagBtnNext">
            <span>Next</span> <ArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pages}
        previousLabel={
          <div className="flex pagBtnPrev">
            <ArrowLeft /> <span>Prev</span>
          </div>
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
    }
  }
  .pagBtnNext{
    span{
      margin-right:7px;
    }
    &:hover {
      color:#1ea4ce;
    }
  }
  .pagBtnPrev{
    color:#1ea4ce;
    span{
      margin-left:7px;
    }
  }
  .selected{
    background-color: var(--main-blue-color);
    color: white;
    border-radius:2px;
    pointer-events:none;
  }
  }
`;
