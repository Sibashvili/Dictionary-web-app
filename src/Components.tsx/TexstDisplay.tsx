import React from "react";

function TextDisplay({ selectedFont, theme }: propstype) {
  const text = "This is a sample text.";

  return (
    <p
      className={`${
        selectedFont === "Sans-serif"
          ? "font-sans-serif"
          : selectedFont === "Serif"
          ? "font-serif"
          : "font-mono"
      } ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      {text}
    </p>
  );
}

export default TextDisplay;
