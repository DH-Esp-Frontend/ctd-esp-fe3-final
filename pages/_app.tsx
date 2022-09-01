import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../styles/material-theme";
import LayoutGeneral from "../components/layouts/layout-general";

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral>
    <style jsx global>{`
              /* Other global styles such as 'html, body' etc... */

              #__next {
                height: 100%;
              }
            `}</style>
  </ThemeProvider>
}

export default MyApp
