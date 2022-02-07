//Modules
import React from "react";
import styled from "styled-components";
//Components
import Sorting from "./sortinga";
import Brands from "./brandsa";
import Tags from "./tagsa";
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
  @media (max-width: 1280px) {
    grid-column-start: 2;
  }
  @media (max-width: 1160px) {
    grid-column-start: 1;
  }
`;
