import * as actions from "./actions";
import { dummyAdd } from "./dummyAdd";


export function reducer(state, action) {
    console.log("TESTING" + action);
    switch (action.type) {
        case actions.UPLOAD:
            // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
            //addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
            // console.log("test");
            return [...state, dummyAdd];
        //throw new Error("upload");

        case actions.MARK:
            // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
            //addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
            // console.log("test");
            // return [...state, dummyAdd];
            throw new Error("MARK - not implemented yet");

        default:
            throw new Error("default");
        // return state;
    }
}




















