import * as actions from "./actions";

const dummyAdd =
{
    name: 'Added homework',
    image: 'https://st.depositphotos.com/2075661/2156/v/600/depositphotos_21567881-stock-illustration-homework.jpg',
    dateSet: 'yesterday',
    dateDue: 'tommorow',
    comment: '',
    children:
        [
            {
                name: 'Cindy',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            },
            {
                name: 'Mitch',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            },
            {
                name: 'Elaine',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            },
            {
                name: 'Rupert',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            },
            {
                name: 'Janice',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            },
            {
                name: 'Fifi',
                avatar: 'https://static.thenounproject.com/png/363640-200.png',
                homeworkStatus: 'not done',
                individualHomeworkImage: null
            }
        ]
};


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




















