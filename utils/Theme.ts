import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  type: "dark",
  background: {
    backgroundColor: "#000000",
  },
  text: {
    textColor: "#FFFFFF",
  },
};

export const LightTheme: DefaultTheme = {
  type: "light",
  background: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    textColor: "#000000",
  },
};
