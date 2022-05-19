import { ThemeProvider } from 'next-themes'
import '../styles.css'

function MyApp({ Component, pageProps }: any ) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp