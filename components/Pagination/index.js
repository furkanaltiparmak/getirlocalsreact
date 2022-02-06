import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch, setFilters } from "../../store/slices/productSlice";
import { getRequestString } from "../../utils/functions";
const Pagination = () => {
  const { pages } = useSelector((state) => state.productReducer.products);
  const filters = useSelector((state) => state.productReducer.filters);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const filter = { ...filters, page: event.selected + 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };
  return (
    <Container>
      <ReactPaginate
        breakLabel={<div className="breakLabel">...</div>}
        nextLabel={
          <div className="pagBtn pagBtnNext">
            <span>Next</span> <ArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pages}
        previousLabel={
          <div className="pagBtn pagBtnPrev">
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
        color:#1EA4CE;
      }
    }
  }
  .pagBtn {
    display:flex;
    justify-content:center;
      align-items:center;
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
  .breakLabel {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .selected{
    background-color: #1ea4ce;
    color: white;
    border-radius:2px;
    pointer-events:none;
  }
  }
`;
