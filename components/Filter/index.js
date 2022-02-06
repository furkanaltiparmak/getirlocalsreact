//Modules
import React from "react";
import styled from "styled-components";
//Components
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";
const Filters = () => {
  return (
    <Container>
      <Sorting />
      <Brands />
      <Tags />
    </Container>
  );
};

export default Filters;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
