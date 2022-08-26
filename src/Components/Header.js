import React from "react";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 80px auto 0;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
`;

const StyledParagraph = styled.p`
  color: hsl(229, 8%, 60%);
  line-height: 1.5;
  margin: 40px 0;
`;

export default function Header() {
  const purpleBtn = {
    boxShadow: "0 10px 20px  hsl(229, 8%, 60%)",
  };
  const greyBtn = {
    backgroundColor: "#F8F8F8",
    color: "hsl(229, 8%, 60%)",
    fontWeight: "500",
    border: "none",
    boxShadow: "0 10px 20px  hsl(229, 8%, 60%)",
    marginLeft: "20px",
  };

  return (
    <FlexContainer>
      <div>
        <StyledTitle>A Simple Bookmark Manager</StyledTitle>
        <StyledParagraph>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try for free.
        </StyledParagraph>
        <StyledButton text={"Get it on Chrome"} style={purpleBtn} />
        <StyledButton
          text={"Get it on Firefox"}
          className="btn-secondary"
          style={greyBtn}
        />
      </div>
      <div>
        <img src="./assets/illustration-hero.svg" alt="illustration" />
      </div>
    </FlexContainer>
  );
}
