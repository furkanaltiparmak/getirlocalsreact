import React from "react";
import styled from "styled-components";
import Check from "../icons/Check";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilters, getProductsFetch } from "../../store/slices/productSlice";
import { getRequestString } from "../../utils/functions";

const Sorting = () => {
  const { filters } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { sort } = filters;
  const sorts = [
    {
      name: "Price low to high",
      value: { sortBy: "asc", key: "price" },
      selected: sort.sortBy === "asc" && sort.key === "price" && true,
    },
    {
      name: "Price high to low",
      value: { sortBy: "desc", key: "price" },
      selected: sort.sortBy === "desc" && sort.key === "price" && true,
    },
    {
      name: "New to old",
      value: { sortBy: "asc", key: "added" },
      selected: sort.sortBy === "asc" && sort.key === "added" && true,
    },
    {
      name: "Old to new",
      value: { sortBy: "desc", key: "added" },
      selected: sort.sortBy === "desc" && sort.key === "added" && true,
    },
  ];

  const onSortClick = (val) => {
    let filter = { ...filters, sort: val, page: 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };

  return (
    <Container>
      <h1 className="title">Sorting</h1>
      <Sort>
        {sorts.map((sort, key) => (
          <div
            className="wrapper"
            key={key}
            onClick={() => onSortClick(sort.value)}
          >
            <span className={`${sort.selected ? "checked" : "unchecked"}`}>
              {sort.selected && (
                <Check width={10} height={7} color={"#1ea4ce"} />
              )}
            </span>
            {sort.name}
          </div>
        ))}
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
  .wrapper {
    cursor: pointer;
  }
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
