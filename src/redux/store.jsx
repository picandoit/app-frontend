import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import kahootReducer from "../features/kahoot/kahootSlice";
import userReducer from "../features/user/userSlice";
import gameReducer from "../features/game/gameSlice";

const rootReducer = combineReducers({
  kahoot: kahootReducer,
  game: gameReducer,
  user: userReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
