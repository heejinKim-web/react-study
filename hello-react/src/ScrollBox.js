import React, { useRef } from "react";

const ScrollBox = () => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  const boxRef = useRef(null);

  const scrollToBottom = () => {
    const sH = boxRef.current.scrollHeight;
    const cH = boxRef.current.clientHeight;
    boxRef.current.scrollTop = sH - cH;
  };

  return (
    <>
      <div style={style} ref={boxRef}>
        <div style={innerStyle}></div>
      </div>
      <button onClick={() => scrollToBottom()}>맨 밑으로</button>
    </>
  );
};

export default ScrollBox;
