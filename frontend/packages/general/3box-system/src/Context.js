/**
 * @name EthersContext
 * @description Initialize Ethers context.
 */

import { createContext } from "react";

const Context = createContext({
  account: undefined,
});

export default Context;
