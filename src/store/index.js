import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user-reducer";

const rootReducer = combineReducers({
  user: user.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default rootReducer;
