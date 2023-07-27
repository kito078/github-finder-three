const githubReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repose: action.payload,
        loading: false,
      };
    case "SET_CLEAR":
      return {
        ...state,
        user: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return { state };
  }
};

export default githubReducer;
