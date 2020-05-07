/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks } from "@ethers-react/system";

/* --- Effect --- */
export const useTokenDetails = (address) => {
  /* --- State --- */
  const [loading, setLoading] = useState(true);
  const getName = hooks.useContractRead(address);
  const getSymbol = hooks.useContractRead(address);
  const getDecimals = hooks.useContractRead(address);

  useEffect(() => {
    if (getName.data && loading) setLoading(false);
  }, [getName.data]);

  /* --- Effects --- */
  useEffect(() => {
    getName.read({
      func: "name",
      inputs: [],
    });
    getSymbol.read({
      func: "symbol",
      inputs: [],
    });
    getSymbol.read({
      func: "decimals",
      inputs: [],
    });
  }, []);

  return {
    loading: loading,
    name: getName.data,
    symbol: getSymbol.data,
    decimals: getDecimals.data,
  };
};
