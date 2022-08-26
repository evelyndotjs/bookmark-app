import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 60px auto;
`;

const StyledIntroContainer = styled.div`
  width: 35%;
  text-align: center;
  margin: 0 auto;
`;

const StyledTextContainer = styled.div`
  width: 40%;
  margin-left: 50px;
`;

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  margin: 100px 0 20px;
`;

const StyledSubHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const StyledParagraph = styled.p`
  color: hsl(229, 8%, 60%);
  line-height: 2;
  margin-bottom: 50px;
`;

export default function Features() {
  const tabStyle = {
    width: "60%",
    margin: "0 auto",
  };

  return (
    <>
      <StyledIntroContainer id="features">
        <StyledSubtitle>Features</StyledSubtitle>
        <StyledParagraph>
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </StyledParagraph>
      </StyledIntroContainer>
      <Tabs
        style={tabStyle}
        defaultActiveKey="bookmark"
        id="feature-tabs"
        className="mb-3 tab-link"
        justify
      >
        <Tab
          eventKey="bookmark"
          title="Simple Bookmarking"
          tabClassName="tab-link-color"
        >
          <FlexContainer>
            <div>
              <img
                src="./assets/illustration-features-tab-1.svg"
                alt="first tab"
              />
            </div>
            <StyledTextContainer>
              <StyledSubHeading>Bookmark in one click</StyledSubHeading>
              <StyledParagraph>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favorite sites.
              </StyledParagraph>
              <StyledButton text="More Info" />
            </StyledTextContainer>
          </FlexContainer>
        </Tab>
        <Tab
          eventKey="search"
          title="Speedy Searching"
          tabClassName="tab-link-color"
        >
          <FlexContainer>
            <div>
              <img
                src="./assets/illustration-features-tab-2.svg"
                alt="second tab"
              />
            </div>
            <StyledTextContainer>
              <StyledSubHeading>Intelligent search</StyledSubHeading>
              <StyledParagraph>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </StyledParagraph>
              <StyledButton text="More Info" />
            </StyledTextContainer>
          </FlexContainer>
        </Tab>
        <Tab
          eventKey="share"
          title="Easy Sharing"
          tabClassName="tab-link-color"
        >
          <FlexContainer>
            <div>
              <img
                src="./assets/illustration-features-tab-3.svg"
                alt="third tab"
              />
            </div>
            <StyledTextContainer>
              <StyledSubHeading>Share your bookmarks</StyledSubHeading>
              <StyledParagraph>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </StyledParagraph>
              <StyledButton text="More Info" />
            </StyledTextContainer>
          </FlexContainer>
        </Tab>
      </Tabs>
    </>
  );
}
