/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/**
 * @name TokenSymbol
 * @param {String} contractSelect
 */
export const TokenSymbol = ({ contractSelector, sx, ...props }) => {
  /* --- State --- */
  const contract = hooks.useContractRead(contractSelector);

  /* --- Effects --- */
  useEffect(() => {
    contract.read({
      func: "symbol",
      inputs: [],
    });
  }, []);

  return !contract.data ? null : (
    <Atom.Span sx={sx} {...props}>
      {contract.data}
    </Atom.Span>
  );
};
