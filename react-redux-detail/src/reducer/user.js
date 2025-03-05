const initializeState = {
  number: 1,
};

export default function userReducer(state = initializeState, action) {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.number = newState.number + Number(action.data.number);
    return newState;
  } else if (action.type === "MINUS") {
    newState.number--;
    return newState;
  }

  return newState;
}
