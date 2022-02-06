//Modules
import React from "react";
import styled from "styled-components";
//Logo
import Logo from "../icons/Logo";
//Components
import ShoppingCart from "../Cart";
const Header = () => {
  return (
    <Container>
      <LogoContainer className="flex">
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
  color: var(--main-white-color);
  display: grid;
  grid-template-columns: repeat(12, 88px);
  gap: 16px;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 142px;
  grid-column: span 2 / span 2;
  grid-column-start: 6;
  justify-self: center;
`;
