import playersReducer from "./playersReducer";
import counterReducer from "./counterReducer";
import resetReducer from "./resetReducer";
import fieldReducer from "./fieldReducer";

export default function createReducers() {
  return {
    ...playersReducer(),
    ...counterReducer(),
    ...resetReducer(),
    ...fieldReducer()
  };
}
