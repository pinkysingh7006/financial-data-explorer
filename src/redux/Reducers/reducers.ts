import { combineReducers } from "redux";
import { LoaderSlice } from "../Slices/loader.slice";

/**COMBINE ALL REDUCERS */
export const reducers = combineReducers({
  loader: LoaderSlice.reducer,
 
});
