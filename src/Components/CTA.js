import React from "react";
import Form from "./Form";
import styled from "styled-components";

const StyledCta = styled.div`
  background-color: hsl(231, 69%, 60%);
  color: #fff;
  width: 100%;
  height: 320px;
`;

const StyledSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;
  padding: 70px 0 30px;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export default function Cta() {
  return (
    <StyledCta id="contact">
      <StyledSubtitle>35,000+ Already Joined</StyledSubtitle>
      <StyledTitle>Stay up-to-date with what we're doing</StyledTitle>
      <Form />
    </StyledCta>
  );
}
