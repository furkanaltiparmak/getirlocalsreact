import React from "react";
import styled from "styled-components";
import Check from "../icons/Check";
const Brands = () => {
  return (
    <Container>
      <h1 className="title">Brands</h1>
      <Brand>
        <div className="searchbox">
          <input placeholder="Search brand" />
        </div>

        <div className="flex-col">
          <div className="checkbox">
            <span className="checked">
              <Check color="white" width={13} height={9} />
            </span>
            All
            <span>(18)</span>
          </div>

          <div className="checkbox">
            <span className="unchecked"></span>
            Beach
            <span>(18)</span>
          </div>

          <div className="checkbox">
            <span className="unchecked"></span>
            People
            <span>(18)</span>
          </div>
          <div className="checkbox">
            <span className="unchecked"></span>
            Beach
            <span>(18)</span>
          </div>

          <div className="checkbox">
            <span className="unchecked"></span>
            People
            <span>(18)</span>
          </div>
        </div>
      </Brand>
    </Container>
  );
};

export default Brands;

const Container = styled.div`
  width: 296px;
  height: 274px;
  margin-bottom: 24px;
  .title {
    font-weight: 500;
    font-size: 13px;
    color: #697488;
    margin-bottom: 12px;
  }
`;

const Brand = styled.div`
  width: 100%;
  height: 244px;
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
  .searchbox {
    border: 2px solid #e0e0e0;
    width: 248px;
    height: 48px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 17px;
    input {
      height: 24px;
      font-size: 14px;
      outline: none;
      border: none;
      color: #a8a8a8;
      ::placeholder {
        color: #a8a8a8;
      }
    }
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 142px;
    width: 248px;
    position: relative;
    z-index: 1;
    .checkbox {
      padding-left: 4px;
      padding-top: 4px;
      span {
        color: #a8a8a8;
        margin-left: 4px;
      }
    }
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: #e0e0e0;
      border-radius: 4px;
    }
  }
  .checked {
    width: 22px;
    height: 22px;
    background-color: #1ea4ce;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 18px;
    -webkit-box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
    box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
    border-radius: 2px;
    position: relative;
    z-index: 3;
  }
  .unchecked {
    width: 22px;
    height: 22px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 18px;
    -webkit-box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
    box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
    border-radius: 2px;
    position: relative;
    z-index: 5;
  }
`;
