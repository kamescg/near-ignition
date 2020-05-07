/** @jsx jsx */
import { jsx } from "theme-ui";

import Blockies from "react-blockies";
export const Blockie = ({ seed, scale = 4, size = 10, sx, sxBlockie }) => {
  return (
    <Atom.Flex
      center
      column
      sx={{ variant: "effects.icon", ...sx, overflow: "hidden" }}
    >
      <Atom.Span sx={{ borderRadius: "50%", overflow: "hidden", mb: "-2px" }}>
        <Blockies
          seed={seed}
          size={size}
          scale={scale}
          className="identicon"
          sx={{ variant: "ethersui.blockie" }}
        />
      </Atom.Span>
    </Atom.Flex>
  );
};
