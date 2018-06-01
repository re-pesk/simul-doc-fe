import * as types from '../actions/action-types';

const initialState = {
  selected: undefined,
};

function documentReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        selected: action.document,
        loading: false,
      };
    case types.LOAD_DOCUMENT_ERROR:
      return {
        ...state,
        documentsError: action.error,
        loading: false,
      };
    case types.LOAD_DOCUMENT:
      return {
        ...state,
        documentsError: undefined,
        loading: true,
      };
    default:
      return state;
  }
}

export default documentReducer;
