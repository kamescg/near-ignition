import {
  ENABLE_REQUEST,
  ENABLE_SUCCESS,
  ENABLE_FAILURE,
  CONTRACT_INIT,
  CONTRACT_INIT_WITH_WALLET,
  SET_NETWORK,
  SET_ADDRESS,
} from "./types";

const reducerActions = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      throw new Error();
  }
};

export default reducerActions;
