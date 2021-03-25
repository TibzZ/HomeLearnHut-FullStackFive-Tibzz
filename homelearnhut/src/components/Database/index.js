import { useReducer } from 'react';

const Database = () => {

    // Variables

    const defaultAvatarUrl = "https://static.thenounproject.com/png/363640-200.png";
    const tempHomeworkUrl = "https://www.cdn.geeksforgeeks.org/wp-content/uploads/jobassignment.png";

    let aux;

    const children = [];

    // goes in the Homework Feed ( NewsFeed )
    const homework = [];

    // child homework
    const childHomework = [];

    const initialState = createData();

    // UseReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'uploadHomework':
                // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
                addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
            default:
                console.log("fix the reducer");
            //throw new Error();
        }
    }



    // Functions to create and update data


    function addChild(name, avatarUrl = defaultAvatarUrl) {
        children.push({ name: name, avatar: avatarUrl, homeworkStatus: "not done" })
    }

    // at present homework is just assigned to all children
    function addHomework(name, imageUrl, dateSet, dateDue, comment) {
        homework.push({
            name: name, image: imageUrl, dateSet: dateSet, dateDue: dateDue, commnet: comment, children: JSON.parse(JSON.stringify(children))
        })

    }


    function createData() {
        // create children
        addChild("Cindy");
        addChild("Mitch");
        addChild("Elaine");
        addChild("Rupert");
        addChild("Janice");

        // create homework
        addHomework("Maths week 1", tempHomeworkUrl, "yesterday", "tommorow", children);
        addHomework("English week 1", tempHomeworkUrl, "yesterday", "tommorow", children);
        addHomework("Art week 1", tempHomeworkUrl, "yesterday", "tommorow", children);

        return homework;
    }

    // return the useReducer hook
    return [state, dispatch]
}

export default Database
    ;