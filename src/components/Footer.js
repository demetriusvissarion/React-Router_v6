import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  // get the navigate function

  const goBack = () => {
    // imperatively redirect back
  };

  const goForward = () => {
    // imperatively redirect forward
  };

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
