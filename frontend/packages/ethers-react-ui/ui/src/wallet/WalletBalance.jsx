/* --- Global --- */
import React from "react";
import { hooks, withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const WalletBalance = ({ sx, ...props }) => {
  const balance = hooks.useWalletBalanceChange();
  return (
    <Span sx={sx} {...props}>
      {balance.eth || 0}
    </Span>
  );
};
