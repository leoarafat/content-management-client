import { createStore } from "redux";
import { contentReducer } from "./reducer/contentReducer";

export const store = createStore(contentReducer)