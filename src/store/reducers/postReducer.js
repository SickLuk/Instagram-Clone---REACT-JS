import * as actionTypes from "../actions/generatePost";

const initialState = {
  loading: false,
  error: false,
  postDb: [],
  postStorage: []
}

const post_reducer = (state = initialState, action) =>{
  switch (action.type){
    case actionTypes.POST_SUCCESS:
      return{
        ...state,
        loading: false,
        error: false,
        postStorage: action.postStorage,
      }

    case actionTypes.POST_FAIL:
      return{
        ...state,
        loading: false,
        error: true,
      }

    case actionTypes.POST_START:
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

export default post_reducer;