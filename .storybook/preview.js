import {theme} from "../styles/material-theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withProviders = (StoryFn) => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoryFn />
      </ThemeProvider>
  );
};

export const decorators = [withProviders];