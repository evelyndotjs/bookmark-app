import React from "react";
import Button from "react-bootstrap/Button";

export default function StyledButton({ text, style, className }) {
  const styledBtn = {
    padding: "10px 25px",
  };

  return (
    <>
      <Button
        style={{ ...style, ...styledBtn }}
        size="lg"
        className={className}
      >
        {text}
      </Button>
    </>
  );
}
