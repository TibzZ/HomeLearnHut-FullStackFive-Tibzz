import * as actions from "./actions";
import * as pages from "./pages";
import { dummyAdd } from "./dummyAdd";
import { homework } from "./homework";

export function reducer(state, action) {
    switch (action.type) {
        case actions.UPLOAD:
            // Database link would be POST request ( INSERT etc )
            return { ...state, homework: [...state.homework, action.payload] };
        case actions.GO_TO_FEED:
            // back to feed gets the data fresh from the database each time
            // Database link would be GET request ( SELECT * etc )
            return { ...state, page: pages.FEED };
        case actions.DOWN_TO_CLASSROOM:
            console.log(`payload for go to classroom ${action.payload}`);
            return { ...state, page: pages.CLASSROOM, homeworkIndex: action.payload };
        case actions.UP_TO_CLASSROOM:
            return { ...state, page: pages.CLASSROOM };
        case actions.GO_TO_HOMEWORK:
            console.log(`payload for go to homeworkviewer ${action.payload}`);
            return { ...state, page: pages.VIEWER, childIndex: action.payload };
        case actions.MARK:
            // Database link would be PUT ( UPDATE etc )
            // add homework annotation and comment
            state.homework[state.homeworkIndex].children[state.childIndex].comment = action.payload.comment;
            state.homework[state.homeworkIndex].children[state.childIndex].annotation = action.payload.annotation;

            return state;
        case actions.REJECT:
            // reject the homework, make it null
            // delete the image url of the homework, set done to false
            throw new Error("REJECT - not implemented yet");
        default:
            throw new Error("invalid action");
    }
}
