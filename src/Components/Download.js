import React from "react";
import Cards from "./Cards";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  width: 35%;
  text-align: center;
  margin: 0 auto -30px;
`;

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  margin: 100px 0 20px;
`;

const StyledParagraph = styled.p`
  color: hsl(229, 8%, 60%);
  line-height: 2;
`;

export default function Download() {


  
  return (
    <>
      <StyledIntroContainer>
        <StyledSubtitle>Download the extension</StyledSubtitle>
        <StyledParagraph>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritze.
        </StyledParagraph>
      </StyledIntroContainer>
      <Cards />
    </>
  );
}
