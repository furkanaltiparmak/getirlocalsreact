//Modules
import React from "react";
import styled from "styled-components";
//Icons
import Check from "../icons/check";
import { useSelector, useDispatch } from "react-redux";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { getRequestString } from "../../utils/functions";
// Styled Components
import { FilterContainer, FilterWrapper } from "../styled/filter";
import { FlexContainer } from "../styled/shared";

const Sorting = () => {
  const { filters } = useSelector((state) => state.filterReducer);
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
      value: { sortBy: "desc", key: "added" },
      selected: sort.sortBy === "asc" && sort.key === "added" && true,
    },
    {
      name: "Old to new",
      value: { sortBy: "asc", key: "added" },
      selected: sort.sortBy === "desc" && sort.key === "added" && true,
    },
  ];

  const onSortClick = (val) => {
    let filter = { ...filters, sort: val, page: 1 };

    dispatch(setFilters(filter));
    dispatch(getProductsFetch(getRequestString(filter)));
  };

  return (
    <FilterContainer sort>
      <h1 className="title">Sorting</h1>
      <Sort>
        {sorts.map((sort, key) => (
          <div
            className="sortItemWrapper"
            key={key}
            onClick={() => onSortClick(sort.value)}
          >
            {sort.selected ? (
              <SortCheckBox checked>
                <Check width={10} height={7} color={"#1ea4ce"} />
              </SortCheckBox>
            ) : (
              <SortCheckBox></SortCheckBox>
            )}

            {sort.name}
          </div>
        ))}
      </Sort>
    </FilterContainer>
  );
};

export default Sorting;

export const Sort = styled(FilterWrapper)`
  height: 184px;
  .sortItemWrapper {
    cursor: pointer;
  }
`;

export const SortItem = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.checked ? "var(--main-blue-color)" : "#dfdee2")};
  margin-right: 12px;
  margin-bottom: 16px;
`;

export const SortCheckBox = styled(FlexContainer)`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.checked ? "var(--main-blue-color)" : "#dfdee2")};
  margin-right: 12px;
  margin-bottom: 16px;
`;
