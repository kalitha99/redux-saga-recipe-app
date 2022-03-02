import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "./actiontypes";
import { getRecipe } from "./api";

export function* onLoadRecipeAsync({ payload: query }) {
  try {
    console.log('query',query);
    const response = yield call(getRecipe, query);
    yield put({ type: types.FETCH_RECIPE_SUCESSS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_RECIPE_FALI, payload: error });
  }
}

export function* onLoadRecipe() {
  yield takeLatest(types.FETCH_RECIPE_START, onLoadRecipeAsync);
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga() {
  yield all([...recipeSaga]);
}
