import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#E54B4F", "#202023")(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 0,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseType: (props: any) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'Saira Extra Condensed'"
};

const colors = {
  glassTeal: "#88ccca",
  primary: "#F5F4E9",
  secondary: "#E54B4F"
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
});

export default theme;
