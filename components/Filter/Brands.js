//Modules
import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//Icons
import Check from "../icons/Check";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { filterBySearch, getRequestString } from "../../utils/functions";

const Brands = () => {
  const brandList = useSelector((state) => state.filterReducer.brands);
  const { filters } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);

  const onBrandClick = (val) => {
    let filter = { ...filters, brand: val };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };

  return (
    <Container>
      <h1 className="title">Brands</h1>
      <Brand>
        <div className="searchbox">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search brand"
          />
        </div>

        <div className="flex-col">
          <div onClick={() => onBrandClick("")} className="checkbox">
            <span
              className={`checkWrapper ${
                filters.brand === "" ? "flex bg-primary" : ""
              }`}
            >
              {filters.brand === "" && (
                <Check color="white" width={13} height={9} />
              )}
            </span>
            All
          </div>
          {Object.keys(filterBySearch(brandList, searchText)).map(
            (brand, key) => (
              <div
                onClick={() => onBrandClick(brandList[brand].slug)}
                key={key}
                className="checkbox"
              >
                <span
                  className={`checkWrapper ${
                    filters.brand === brandList[brand].slug
                      ? "flex bg-primary"
                      : ""
                  }`}
                >
                  {filters.brand === brandList[brand].slug && (
                    <Check color="white" width={13} height={9} />
                  )}
                </span>
                <div className="option-text">
                  {brand}
                  <span>({brandList[brand].count})</span>
                </div>
              </div>
            )
          )}
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
  @media (max-width: 960px) {
    width: 100%;
    padding: 10px;
  }
  .title {
    font-weight: 600;
    font-size: 13px;
    color: #697488;
    margin-bottom: 12px;
    margin-top: 0;
  }
`;

const Brand = styled.div`
  width: 100%;
  height: 244px;
  background-color: var(--main-white-color);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  color: #525252;
  padding-top: 24px;
  padding-left: 24px;
  @media (max-width: 960px) {
    padding-right: 24px;
  }
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
    @media (max-width: 960px) {
      width: 100%;
      padding-right: 16px;
    }
    input {
      height: 24px;
      font-size: 14px;
      outline: none;
      border: none;
      color: #525252;
      ::placeholder {
        color: #a8a8a8;
      }
      @media (max-width: 960px) {
        width: 100%;
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
    @media (max-width: 960px) {
      width: 100%;
    }
    .checkbox {
      padding-left: 4px;
      padding-top: 4px;
      cursor: pointer;

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
  .checkWrapper {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    margin-bottom: 18px;
    border-radius: 2px;
    box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
  }
  .option-text {
    width: 200px;
    @media (max-width: 960px) {
      width: 300px;
    }
  }
`;
