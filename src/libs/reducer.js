import * as actions from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case actions.FETCH:
      return { ...state, homework: action.payload };
    case actions.HOMEWORKCHANGE:
      return { ...state, homeworkIndex: action.payload };
    case actions.CHILDCHANGE:
      return { ...state, childIndex: action.payload };
    default:
      throw new Error("invalid action");
  }
}
