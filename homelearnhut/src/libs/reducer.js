import * as actions from "./actions";


export function reducer(state, action) {
    console.log("state" + state)
    switch (action.type) {
        case actions.UPLOAD:

            // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
            //addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
            console.log("test");
            return {

                state
            }
        default:
            return { state }
    }
}


















