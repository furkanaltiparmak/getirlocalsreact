import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getProductsFetch } from "../../store/slices/productSlice";
const Pagination = () => {
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const offset = event.selected * 16;

    dispatch(getProductsFetch(offset));
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
        pageCount={140}
        previousLabel={
          <div className="pagBtn pagBtnPrev">
            <ArrowLeft /> <span>Prev</span>
          </div>
        }
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};

export default Pagination;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
