/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks, utils, withEthers } from "@ethers-react/system";

/**
 * @name WalletTokenBalance
 * @param {*} selector
 */
export const WalletTokenBalance = ({
  contractSelector,
  img,
  trimmed,
  sx,
  sxBalance,
  sxImage,
  decimals = 0,
  ...props
}) => {
  /* --- Local : State --- */
  const ethersProvider = withEthers();
  const [balance, setBalance] = useState({});

  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead(contractSelector);

  /* --- Select Contract : Effect --- */
  useEffect(() => {
    contractRead.read({
      func: "balanceOf",
      inputs: [ethersProvider.address],
    });
  }, [ethersProvider.address]);

  /* --- Format Balance : Effect --- */
  useEffect(() => {
    if (contractRead.data)
      setBalance({
        bigNumber: contractRead.data,
        wei: contractRead.data.toString(),
        full: utils.formatEther(contractRead.data),
        trimmed: utils.formatEther(
          contractRead.data.mul(decimals ? 10 ** (18 - decimals) : 1),
          {
            commify: true,
            pad: true,
          }
        ),
      });
  }, [contractRead.data]);

  return (
    <Atom.Flex alignCenter sx={sx}>
      {img && <Atom.Image src={img} sx={{ width: 24, ...sxImage }} />}
      <Atom.Span sx={{ ml: 2, ...sxBalance }} {...props}>
        {trimmed ? balance.trimmed : balance.full}
      </Atom.Span>
    </Atom.Flex>
  );
};
