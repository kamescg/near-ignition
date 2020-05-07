/**
 * @function WalletAutoConnect
 * @version 0.0.0
 * @description Automatically connect to the wallet if correct conditions.
 */
/* --- Global --- */
import { useEffect } from "react";
import { withEthers } from "@ethers-react/system";

/* ---  WalletAutoConnect : Component --- */
export const WalletAutoConnect = ({ tx, sx, ...props }) => {
  const ethers = withEthers();

  /* ---  Login : Effect --- */
  useEffect(() => {
    if (ethers.providerSelect) {
      const autoLogin = localStorage.getItem("ethers-react-auto-login");
      if (JSON.parse(autoLogin)) ethers.providerSelect();
    }
  }, [ethers.providerSelect]);

  return null;
};
