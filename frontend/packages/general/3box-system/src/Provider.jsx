/* --- Global --- */

import React, { useContext, useReducer, useEffect, useState } from "react";
import * as Box from "3box";
import { withEthers } from "@ethers-react/system";
import Dexie from "dexie";
/* --- Local --- */
import Context from "./Context";
import reducer from "./lib/reducer";
import { setItem, getItem } from "./lib/cache";

/* --- Component --- */
const ThreeBoxProvider = ({ children }) => {
  const ethersProvider = withEthers();
  const boxState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, boxState);

  /* --- Developer Messages --- */
  if (Number(process.env.REACT_APP_3BOX_SYSTEM_DEBUG) === 1) {
    // console.log(state, "Three Box");
  }

  useEffect(() => {
    const profile = getItem("profile");
    profile.then((p) => {
      dispatch({
        type: "SET_PROFILE",
        payload: p,
      });
    });
  }, []);

  useEffect(() => {
    if ((ethersProvider.address, ethersProvider.provider)) {
      (async () => {
        const box = await Box.openBox(
          ethersProvider.address,
          ethersProvider.provider.provider
        );
        const profile = await box.public.all();
        setItem("profile", profile);
        dispatch({
          type: "SET_ADDRESS",
          payload: ethersProvider.address,
        });
        dispatch({
          type: "SET_ACCOUNT",
          payload: box,
        });
        dispatch({
          type: "SET_PROFILE",
          payload: profile,
        });
      })();
    }
  }, [ethersProvider.address, ethersProvider.provider]);

  return (
    <Context.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ThreeBoxProvider;
