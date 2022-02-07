//Modules
import styled from "styled-components";
import { FlexContainer } from "./shared";

export const FilterContainer = styled.div`
  height: ${(props) => (props.sort ? "214px" : "274px")};
  width: 296px;
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

export const FilterWrapper = styled.div`
  width: 100%;
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
`;

export const BrandOrTags = styled(FilterWrapper)`
  height: 244px;
  @media (max-width: 960px) {
    padding-right: 24px;
  }
  div {
    display: flex;
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
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
`;

export const Input = styled.input`
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
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 142px;
  width: 248px;
  position: relative;
  z-index: 1;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const BrandOrTagCheckBox = styled.div`
  padding-left: 4px;
  padding-top: 4px;
  cursor: pointer;
  span {
    color: #a8a8a8;
    margin-left: 4px;
  }
`;
export const BrandOrTagCheckBoxItem = styled(FlexContainer)`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  margin-bottom: 18px;
  border-radius: 2px;
  box-shadow: 0px 0px 7px 1px rgba(93, 56, 192, 0.25);
`;
export const CheckboxOptionText = styled.div`
  width: 200px;
  @media (max-width: 960px) {
    width: 300px;
  }
`;
