import * as actions from "./actions";
import * as pages from "./pages";
import { dummyAdd } from "./dummyAdd";
import { homework } from "./homework";


export function reducer(state, action) {
    switch (action.type) {
        case actions.UPLOAD:
            return { ...state, homework: [...state.homework, action.payload] };
        case actions.BACKTOFEED:
            return { ...state, page: pages.FEED };
        case action.DOWNTOCLASSROOM:
            return { ...state, page: pages.CLASSROOM, homeworkIndex: state.homeworkIndex };
        case actions.MARK:
            // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
            //addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
            // console.log("test");
            // return [...state, dummyAdd];
            throw new Error("MARK - not implemented yet");

        default:
            console.log("DEFAULT RETURN but " + action.type);

            console.log(
                `${action.type} === ${actions.DOWNTOCLASSROOM}
                ${action.type === action.DOWNTOCLASSROOM}`);

            return state;
        //throw new Error("default");
        // return state;
    }
}




















