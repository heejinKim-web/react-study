import { createContext, useState } from "react";

//context 초기값 설정
const colorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

//Provider action
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    <colorContext.Provider value={value}>{children}</colorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = colorContext;

export { ColorProvider, ColorConsumer };

export default colorContext;
