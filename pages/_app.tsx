import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
