/* --- Global --- */
import { hooks } from "@ethers-react/system";
import { Span } from "@horizin/atoms";
import { useEffect, useState } from "react";

/* ---  AccountBalance : Component --- */
export const AccountBalance = ({ address, callback, sx, ...props }) => {
  let [counter, setCounter] = useState(0);
  let balance = hooks.useBalanceChange(address);

  useEffect(() => {
    if (counter > 0) {
      console.log("callingcb");
      callback(balance);
    }
    if (balance.eth && counter == 0) setCounter(++counter);
  }, [balance]);

  return (
    <Span sx={sx} {...props}>
      <strong>Balance:</strong> {balance.eth}
    </Span>
  );
};
