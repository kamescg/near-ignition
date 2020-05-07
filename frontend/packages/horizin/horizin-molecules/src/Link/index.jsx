/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as ReachLink } from "@reach/router";
import { Box } from "@horizin/atoms";

export const Link = ({ sx, ...props }) => {
  return (
    <Box
      as={ReachLink}
      __themeKey="link"
      variant="style.a"
      sx={{
        m: 0,
        ...sx,
      }}
      {...props}
    />
  );
};
