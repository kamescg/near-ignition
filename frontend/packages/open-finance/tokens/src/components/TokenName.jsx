/* --- Global --- */
import { useEffect } from "react";
import { hooks } from "@ethers-react/system";

/**
 * @name TokenName
 * @param {String} contractSelect
 */
export const TokenName = ({ contractSelector, sx, ...props }) => {
  /* --- State --- */
  const contract = hooks.useContractRead(contractSelector);

  /* --- Effects --- */
  useEffect(() => {
    contract.read({
      func: "name",
      inputs: [],
    });
  }, []);

  return !contract.data ? null : (
    <Atom.Span sx={sx} {...props}>
      {contract.data}
    </Atom.Span>
  );
};
