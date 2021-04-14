import * as actions from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case actions.FETCH:
      return { ...state, homework: action.payload };
    case actions.UPLOAD:
      return { ...state, homework: [...state.homework, action.payload] };
    case actions.MARK:
      state.homework[state.homeworkIndex].children[state.childIndex].comment =
        action.payload.comment;
      state.homework[state.homeworkIndex].children[
        state.childIndex
      ].annotation = action.payload.annotation;
      return state;
    case actions.REJECT:
      state.homework[state.homeworkIndex].children[state.childIndex].comment =
        action.payload.comment;
      state.homework[state.homeworkIndex].children[
        state.childIndex
      ].image = null;
      state.homework[state.homeworkIndex].children[
        state.childIndex
      ].annotation = null;
      return state;
    case actions.HOMEWORKCHANGE:
      return { ...state, homeworkIndex: action.payload };
    case actions.CHILDCHANGE:
      return { ...state, childIndex: action.payload };
    default:
      throw new Error("invalid action");
  }
}
