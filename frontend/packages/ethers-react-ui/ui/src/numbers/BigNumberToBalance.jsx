/* --- Global --- */
import React, { useEffect, useState } from "react";
import { utils } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  BigNumberToBalance : Component --- */
export const BigNumberToBalance = ({
  bigNumber,
  label,
  sx,
  sxLabel,
  ...props
}) => {
  const [number, setNumber] = useState(undefined);
  const [bigNumberPassed, setBigNumberPassed] = useState(bigNumber);

  useEffect(() => {
    setBigNumberPassed(bigNumber);
  }, [bigNumber]);

  useEffect(() => {
    if (bigNumberPassed)
      setNumber(utils.formatEther(bigNumberPassed.toString()));
  }, [bigNumberPassed]);

  return !number ? null : (
    <Span sx={sx} {...props}>
      {label && <Atom.Span sx={sxLabel}>{label}</Atom.Span>}
      {number}
    </Span>
  );
};
