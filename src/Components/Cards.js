import React from "react";
import Card from "react-bootstrap/Card";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 75%;
`;

const DottedBorder = styled.div`
  border-top: 6px dotted #eee;
  width: auto;
  padding: 30px 0;
`;

export default function Cards() {
  const logos = {
    chrome: "./assets/logo-chrome.svg",
    firefox: "./assets/logo-firefox.svg",
    opera: "./assets/logo-opera.svg",
  };

  const cardStyle = {
    width: "30%",
    boxShadow: "0 10px 20px  hsl(229, 8%, 60%)",
    textAlign: "center",
  };

  const firefoxCardStyle = {
    ...cardStyle,
    marginTop: "80px",
  };

  const operaCardStyle = {
    ...cardStyle,
    marginTop: "160px",
  };

  const imageStyle = {
    width: "130px",
    margin: "20px auto",
    padding: "10px",
  };

  const subTitle = {
    color: "hsl(229, 8%, 60%)",
    paddingBottom: "30px",
  };

  return (
    <CardContainer>
      <Card style={cardStyle}>
        <Card.Img style={imageStyle} variant="top" src={logos.chrome} />
        <Card.Body>
          <Card.Title>Add to Chrome</Card.Title>
          <Card.Text style={subTitle}>Minimum version 62</Card.Text>
          <DottedBorder>
            <StyledButton text="Add & Install Extension"></StyledButton>
          </DottedBorder>
        </Card.Body>
      </Card>
      <Card style={firefoxCardStyle}>
        <Card.Img style={imageStyle} variant="top" src={logos.firefox} />
        <Card.Body>
          <Card.Title>Add to Firefox</Card.Title>
          <Card.Text style={subTitle}>Minimum version 55</Card.Text>
          <DottedBorder>
            <StyledButton text="Add & Install Extension"></StyledButton>
          </DottedBorder>
        </Card.Body>
      </Card>
      <Card style={operaCardStyle}>
        <Card.Img style={imageStyle} variant="top" src={logos.opera} />
        <Card.Body>
          <Card.Title>Add to Opera</Card.Title>
          <Card.Text style={subTitle}>Minimum version 46</Card.Text>
          <DottedBorder>
            <StyledButton text="Add & Install Extension"></StyledButton>
          </DottedBorder>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
