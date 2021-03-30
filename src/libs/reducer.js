import * as actions from "./actions";
import * as pages from "./pages";
import { dummyAdd } from "./dummyAdd";
import { homework } from "./homework";

export function reducer(state, action) {
    switch (action.type) {
        case actions.UPLOAD:

            // Upload real data
            //return { ...state, homework: [...state.homework, action.payload] };
            return { ...state, homework: [...state.homework, action.payload] };

        // Dummy data add
        //return { ...state, homework: [...state.homework, dummyAdd] };
        case actions.GO_TO_FEED:
            // back to feed gets the data fresh from the database each time
            // Do a GET request
            return { ...state, page: pages.FEED };
        case actions.GO_TO_CLASSROOM:
            return { ...state, page: pages.CLASSROOM, homeworkIndex: state.homeworkIndex };
        case actions.GO_TO_HOMEWORK:
            return { ...state, page: pages.VIEWER, homeworkIndex: state.homeworkIndex };
        case actions.MARK:
            // accept the homework
            // change the image url of the homework on the database
            throw new Error("MARK - not implemented yet");
        case actions.REJECT:
            // reject the homework
            // delete the image url of the homework
            throw new Error("REJECT - not implemented yet");
        default:
            throw new Error("invalid action");
    }
}
