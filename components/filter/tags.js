//Modules
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Icons
import Check from "../icons/check";
//Store Actions
import { getProductsFetch } from "../../store/slices/productSlice";
import { setFilters } from "../../store/slices/filterSlice";
//Functions
import { filterBySearch, getRequestString } from "../../utils/functions";
//Styled Components
import {
  FilterContainer,
  BrandOrTags,
  InputContainer,
  Input,
  FlexColumn,
  BrandOrTagCheckBox,
  BrandOrTagCheckBoxItem,
} from "../styled/filter";
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
    <FilterContainer>
      <h1 className="title">Tags</h1>
      <BrandOrTags>
        <InputContainer>
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search tag"
          />
        </InputContainer>

        <FlexColumn>
          <BrandOrTagCheckBox onClick={() => onTagClick("")}>
            <BrandOrTagCheckBoxItem
              className={`${filters.tags === "" ? " bg-primary" : ""}`}
            >
              {filters.tags === "" && (
                <Check color="white" width={13} height={9} />
              )}
            </BrandOrTagCheckBoxItem>
            All
          </BrandOrTagCheckBox>
          {Object.keys(filterBySearch(tagList, searchText)).map((tag, key) => (
            <BrandOrTagCheckBox onClick={() => onTagClick(tag)} key={key}>
              <BrandOrTagCheckBoxItem
                className={`${filters.tags === tag ? " bg-primary" : ""}`}
              >
                {filters.tags === tag && (
                  <Check color="white" width={13} height={9} />
                )}
              </BrandOrTagCheckBoxItem>
              {tag}
              <span>({tagList[tag]})</span>
            </BrandOrTagCheckBox>
          ))}
        </FlexColumn>
      </BrandOrTags>
    </FilterContainer>
  );
};

export default Tags;
