import * as actions from "./actions";
import * as pages from "./pages";
import { dummyAdd } from "./dummyAdd";
import { homework } from "./homework";

export function reducer(state, action) {
    switch (action.type) {
        case actions.UPLOAD:
            return { ...state, homework: [...state.homework, action.payload] };
        case actions.GO_TO_FEED:
            // back to feed gets the data fresh from the database each time
            // Do a GET request
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
            // accept the homework
            // add the annotation
            throw new Error("MARK - not implemented yet");
        case actions.REJECT:
            // reject the homework
            // delete the image url of the homework
            throw new Error("REJECT - not implemented yet");
        default:
            throw new Error("invalid action");
    }
}
