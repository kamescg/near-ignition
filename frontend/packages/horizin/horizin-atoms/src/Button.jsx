import React from "react";
import Box from "./Box";

export const Button = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    variant="buttons.core"
    variants={["buttons.secondary"]}
    __themeKey="button"
    __css={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      outline: "none",
    }}
    {...props}
  />
));
