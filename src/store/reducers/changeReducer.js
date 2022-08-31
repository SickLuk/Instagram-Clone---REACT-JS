import * as actionTypes from "../actions/changeInfo";

const initialState = {
  loading: false,
  error: false,
}

const change_reducer = (state = initialState, action) =>{
  switch (action.type){
    case actionTypes.CHANGE_SUCCESS:
      return{
        ...state,
        loading: false,
        error: false,
        postStorage: action.postStorage,
      }

    case actionTypes.CHANGE_FAIL:
      return{
        ...state,
        loading: false,
        error: true,
      }

    case actionTypes.CHANGE_START:
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

export default change_reducer;