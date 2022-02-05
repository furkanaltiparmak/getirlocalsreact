//Modules
import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo";
import ShoppingCart from "../Cart";
const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ShoppingCart />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: #1ea4ce;
  width: 100%;
  height: 77px;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 88px);
  gap: 16px;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 142px;
  grid-column: span 2 / span 2;
  grid-column-start: 6;
`;