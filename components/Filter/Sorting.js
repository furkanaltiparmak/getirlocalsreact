import React from "react";
import styled from "styled-components";
import Check from "../icons/Check";
const Sorting = () => {
  return (
    <Container>
      <h1 className="title">Sorting</h1>
      <Sort>
        <div>
          <span className="checked">
            <Check width={10} height={7} color={"#1ea4ce"} />
          </span>
          Price low to high
        </div>

        <div>
          <span className="unchecked"></span>
          Price high to low
        </div>

        <div>
          <span className="unchecked"></span>
          New to old
        </div>

        <div>
          <span className="unchecked"></span>
          Old to new
        </div>
      </Sort>
    </Container>
  );
};

export default Sorting;

const Container = styled.div`
  width: 296px;
  height: 214px;
  margin-bottom: 24px;
  .title {
    font-weight: 600;
    font-size: 13px;
    color: #697488;
    margin-bottom: 12px;
    margin-top: 0;
  }
`;

const Sort = styled.div`
  width: 100%;
  height: 184px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  color: #525252;
  padding-top: 24px;
  padding-left: 24px;
  div {
    display: flex;
    font-size: 14px;
  }
  .checked {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    margin-bottom: 16px;
  }
  .unchecked {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #dfdee2;
    margin-right: 12px;
    margin-bottom: 16px;
  }
`;
