import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
const Pagination = () => {
  return (
    <Container>
      <div className="pagination">
        <div className="leftButton">
          <div className="arrow">
            <ArrowLeft />
          </div>
          <span>Prev</span>
        </div>
        <div className="pages">
          <div className="page">1</div>
          <div className="page selected">2</div>
          <div className="page">3</div>
          <div className="page">4</div>
          <div className="page">5</div>
        </div>
        <div className="rightButton">
          <span>Next</span>
          <div className="arrow">
            <ArrowRight />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pagination;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .pagination {
    width: 535px;
    height: 40px;
    display: flex;
    color: #697488;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    span {
      height: 24px;
      display: flex;
      align-items: center;
    }
    .leftButton {
      display: flex;
      color: #1ea4ce;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
    .rightButton {
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
    .arrow {
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pages {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .page {
      width: 32px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
    .selected {
      background-color: #1ea4ce;
      color: white;
      border-radius: 2px;
    }
  }
`;
