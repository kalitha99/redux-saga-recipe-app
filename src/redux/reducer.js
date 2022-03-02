import * as types from "./actiontypes";

const initialState = {
  recipeis: [],
  error: null,
  loading: false,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_RECIPE_SUCESSS:
      return {
        ...state,
        loading: false,
        recipeis: action.payload,
      };

    case types.FETCH_RECIPE_FALI:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      default:
           return{
            state
      }
  }
};

export default recipeReducer;
