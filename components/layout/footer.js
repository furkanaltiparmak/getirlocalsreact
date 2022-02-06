import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <span>©2019 Market</span>
      <span className="dot">.</span>
      <span>Privacy Policy</span>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 136px;
  padding-bottom: 40px;
  color: #1ea4ce;
  .dot {
    margin-right: 16px;
    margin-left: 16px;
  }
`;
