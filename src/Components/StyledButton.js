import React from "react";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";

export default function StyledButton({ text, style, className, onClick }) {
  const styledBtn = {
    padding: "10px 25px",
  };

  return (
    <>
      <Button
        style={{ ...style, ...styledBtn }}
        size="lg"
        className={className}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
}
