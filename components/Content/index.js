import React from "react";
import styled from "styled-components";
import Filters from "../Filter";
import Products from "../Product";
const Content = () => {
  return (
    <Container>
      <div className="grid">
        <Filters />
        <Products />
      </div>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 88px);
    gap: 16px;
  }
`;
