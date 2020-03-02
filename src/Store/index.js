import Store from "./store";
import createReducers from "./reducers/mainReducer";

export default new Store(createReducers());
