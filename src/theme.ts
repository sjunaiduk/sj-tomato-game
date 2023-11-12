import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        fontFamily: '"Inter", "sans-serif"',
      },
    }),
  },
});

export default customTheme;
