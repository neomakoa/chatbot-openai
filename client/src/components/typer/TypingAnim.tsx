import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat with your own AI.",
        1000,
        "Build with your own OpenAI.",
        2000,
        "Your own customized ChatGPT.",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    ></TypeAnimation>
  );
};

export default TypingAnim;
