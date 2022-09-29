import "styled-components";

type Hex = `#${string}`;
declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: {
      backgroundColor: Hex;
    };
    text: {
      textColor: Hex;
    };
  }
}
