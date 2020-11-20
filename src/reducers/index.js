/* It is initialize in the top of the components tree
   If it receive an action, this will modify the state
   Delete: add to the list the ones with different id
   Login: send user email to store -NO PASSWORD- */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing: state.trends.find(
          (item) =>
            item.id === Number(action.payload) ||
            state.originals.find(
              (item) => item.id === Number(action.payload)
            ) ||
            []
        ),
      };
    default:
      return state;
  }
};

export default reducer;
