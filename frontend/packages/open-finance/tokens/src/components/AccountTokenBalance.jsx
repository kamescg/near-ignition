/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks, utils } from "@ethers-react/system";

/**
 * @name AccountTokenBalance
 * @param {*} param0
 */
export const AccountTokenBalance = ({
  address,
  contractSelector,
  sx,
  ...props
}) => {
  /* --- State --- */
  const [balance, setBalance] = useState();
  const contract = hooks.useContractRead(contractSelector);

  /* --- Effects --- */
  useEffect(() => {
    contract.read({
      func: "balanceOf",
      inputs: [address],
    });
  }, [address]);

  useEffect(() => {
    if (contract.data)
      setBalance(utils.commify(utils.formatEther(contract.data.toString())));
  }, [contract]);

  return (
    <Atom.Span sx={sx} {...props}>
      {balance}
    </Atom.Span>
  );
};
