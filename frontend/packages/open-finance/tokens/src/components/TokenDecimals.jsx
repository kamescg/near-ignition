/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/**
 * @name TokenDecimals
 * @param {String} contractSelect
 */
export const TokenDecimals = ({ contractSelector, sx, ...props }) => {
  /* --- State --- */
  const contract = hooks.useContractRead(contractSelector);

  /* --- Effects --- */
  useEffect(() => {
    contract.read({
      func: "decimals",
      inputs: [],
    });
  }, []);

  return !contract.data ? null : (
    <Atom.Span sx={sx} {...props}>
      {contract.data}
    </Atom.Span>
  );
};
