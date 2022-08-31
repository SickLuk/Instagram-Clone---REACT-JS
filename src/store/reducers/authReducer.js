import * as actionTypes from "../actions/handleAuth";

const initialState = {
  loading: false,
  error: false,
  accessToken: "",
  uid: "",
  displayName: "",
  photoURL: null
};

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case actionTypes.AUTH_SUCCESS:
      return{
        ...state,
        loading: false,
        error: false,
        accessToken: action.accessToken,
        uid: action.uid,
        displayName: action.displayName,
        photoURL: action.photoURL
      }

    case actionTypes.AUTH_FAIL:
      return{
        ...state,
        loading: false,
        error: action.error,
      }

    case actionTypes.AUTH_START:
      return{
        ...state,
        loading: true
      }

    default:
      return{
        ...state
      }
  }
}

export default reducer;