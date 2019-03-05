import React from "react";
import { initial as initialState } from "./initial";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

export default reducer;
