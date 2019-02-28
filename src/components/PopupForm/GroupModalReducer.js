function GroupModalReducer(state, action) {
  const initialState = { active: false };

  switch (action.type) {
    case "initial":
      return initialState;
    case "active":
      return { active: true };
    case "deactive":
      return { active: false };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

export default GroupModalReducer;
