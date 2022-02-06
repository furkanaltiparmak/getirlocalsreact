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

const Tags = () => {
  const tagList = useSelector((state) => state.filterReducer.tags);
  const { filters } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState(null);
  const onTagClick = (val) => {
    let filter = { ...filters, tags: val, page: 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };
  return (
    <Container>
      <h1 className="title">Tags</h1>
      <Brand>
        <div className="searchbox">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search tag"
          />
        </div>

        <div className="flex-col">
          <div onClick={() => onTagClick("")} className="checkbox">
            <span
              className={`checkWrapper ${
                filters.tags === "" ? "flex bg-primary" : ""
              }`}
            >
              {filters.tags === "" && (
                <Check color="white" width={13} height={9} />
              )}
            </span>
            All
          </div>
          {Object.keys(filterBySearch(tagList, searchText)).map((tag, key) => (
            <div onClick={() => onTagClick(tag)} key={key} className="checkbox">
              <span
                className={`checkWrapper ${
                  filters.tags === tag ? "flex bg-primary" : ""
                }`}
              >
                {filters.tags === tag && (
                  <Check color="white" width={13} height={9} />
                )}
              </span>
              {tag}
              <span>({tagList[tag]})</span>
            </div>
          ))}
        </div>
      </Brand>
    </Container>
  );
};

export default Tags;

const Container = styled.div`
  width: 296px;
  height: 274px;
  margin-bottom: 24px;
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
`;
