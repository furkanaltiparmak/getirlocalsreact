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
  CheckboxOptionText,
} from "../styled/filter";

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
    <FilterContainer>
      <h1 className="title">Brands</h1>
      <BrandOrTags>
        <InputContainer>
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search brand"
          />
        </InputContainer>

        <FlexColumn>
          <BrandOrTagCheckBox onClick={() => onBrandClick("")}>
            <BrandOrTagCheckBoxItem
              className={`${filters.brand === "" ? " bg-primary" : ""}`}
            >
              {filters.brand === "" && (
                <Check color="white" width={13} height={9} />
              )}
            </BrandOrTagCheckBoxItem>
            All
          </BrandOrTagCheckBox>
          {Object.keys(filterBySearch(brandList, searchText)).map(
            (brand, key) => (
              <BrandOrTagCheckBox
                onClick={() => onBrandClick(brandList[brand].slug)}
                key={key}
              >
                <BrandOrTagCheckBoxItem
                  className={`${
                    filters.brand === brandList[brand].slug ? " bg-primary" : ""
                  }`}
                >
                  {filters.brand === brandList[brand].slug && (
                    <Check color="white" width={13} height={9} />
                  )}
                </BrandOrTagCheckBoxItem>
                <CheckboxOptionText>
                  {brand}
                  <span>({brandList[brand].count})</span>
                </CheckboxOptionText>
              </BrandOrTagCheckBox>
            )
          )}
        </FlexColumn>
      </BrandOrTags>
    </FilterContainer>
  );
};

export default Brands;
