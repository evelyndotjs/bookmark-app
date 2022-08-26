import React, { useState } from "react";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export default function Form() {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(null);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function checkEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleClick(e) {
    e.preventDefault();
    if (email !== checkEmail(email)) {
      setValidateEmail("Please enter a valid email");
    } else {
      setValidateEmail(null);
      setMessage("Thanks for subscribing!");
    }
  }

  const formMargin = {
    marginRight: "20px",
  };

  return (
    <StyledForm>
      <form action="submit" method="POST">
        <input
          style={formMargin}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {validateEmail && <h2 style={{ color: "red" }}>{message}</h2>}

        <StyledButton
          text="Contact Us"
          className="btn-danger"
          type="submit"
          value="send"
          onClick={handleClick}
        ></StyledButton>
      </form>
    </StyledForm>
  );
}
