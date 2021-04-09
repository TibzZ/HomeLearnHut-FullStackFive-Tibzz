import * as actions from "./actions";
import * as pages from "./pages";
import { homework } from "./data/homework";

export function reducer(state, action) {
    switch (action.type) {
        case actions.UPLOAD:
            // Database link would be POST request ( INSERT etc )
            return { ...state, homework: [...state.homework, action.payload] };
        case actions.MARK:
            // Database link would be PUT ( UPDATE etc )
            // add homework annotation and comment
            state.homework[state.homeworkIndex].children[state.childIndex].comment = action.payload.comment;
            state.homework[state.homeworkIndex].children[state.childIndex].annotation = action.payload.annotation;

            return state;
        case actions.REJECT:
            state.homework[state.homeworkIndex].children[state.childIndex].comment = action.payload.comment;
            state.homework[state.homeworkIndex].children[state.childIndex].individualHomeworkImage = null;
            state.homework[state.homeworkIndex].children[state.childIndex].annotation = null;
            return state;
        default:
            throw new Error("invalid action");
    }
}
