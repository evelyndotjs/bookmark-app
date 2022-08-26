import React from "react";
import StyledButton from "./StyledButton";
import FaqAccordion from "./FaqAccordion";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  width: 35%;
  text-align: center;
  margin: 0 auto 30px;
`;

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  margin: 100px 0 20px;
`;

const StyledParagraph = styled.p`
  color: hsl(229, 8%, 60%);
  line-height: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CenterButton = styled(StyledButton)`
  margin: 25px auto 120px;
`;

export default function Faq() {
  return (
    <div id="faq">
      <StyledIntroContainer>
        <StyledSubtitle>Frequently Asked Questions</StyledSubtitle>
        <StyledParagraph>
          Here are some of our FAQs. If you have any other questions you'd like
          answered, please feel free to email us.
        </StyledParagraph>
      </StyledIntroContainer>
      <FaqAccordion />
      <ButtonContainer>
        <CenterButton text="More Info"></CenterButton>
      </ButtonContainer>
    </div>
  );
}
