import * as actions from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case actions.FETCH:
      return { ...state, homework: action.payload };
    case actions.HOMEWORK_CHANGE:
      return { ...state, homeworkIndex: action.payload };
    case actions.CHILD_CHANGE:
      return { ...state, childIndex: action.payload };
    default:
      throw new Error("invalid action");
  }
}
