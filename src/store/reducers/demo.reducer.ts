const INITIAL_STATE = {
  num: 0,
  testData: {},
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        num: state.num + action.payload,
      };
    case "MINUS":
      return {
        ...state,
        num: state.num - action.payload,
      };
    case `ADD_SUCCESS`:
      return {
        ...state,
        num: state.num + action.payload,
      };
    case `API_getUserInfo_SUCCESS`:
      let testData = action.payload;
      return {
        ...state,
        testData,
      };
    default:
      return state;
  }
}
