import React, { useState } from "react";
import StyledButton from "./StyledButton";
import styled from "styled-components";
import validator from "validator";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const StyledErrorMsg = styled.p`
  background-color: hsl(0, 94%, 66%);
  color: #fff;
  width: 250px;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 700;
  padding: 5px 0 5px 5px;
  margin: -25px auto;
  border-radius: 5px;
`;

export default function Form() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  let validateEmail = validator.isEmail(email);

  function handleClick(e) {
    e.preventDefault();
    if (validateEmail) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }

  const formStyle = {
    width: "300px",
    marginRight: "20px",
  };

  const errorFormStyle = {
    ...formStyle,
    backgroundImage: "url(/assets/icon-error.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "20px",
    backgroundOrigin: "content-box",
  };

  return (
    <>
      <StyledForm action="submit" method="POST">
        <input
          style={validate ? formStyle : errorFormStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <StyledButton
          text="Contact Us"
          className="btn-danger"
          onClick={handleClick}
        ></StyledButton>
      </StyledForm>
      {validate ? null : (
        <StyledErrorMsg>Whoops, make sure it's an email</StyledErrorMsg>
      )}
    </>
  );
}
