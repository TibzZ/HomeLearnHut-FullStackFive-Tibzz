import { useReducer } from 'react';

const Database = () => {

    // Variables

    const defaultAvatarUrl = "https://static.thenounproject.com/png/363640-200.png";
    const tempHomeworkUrl = "https://www.cdn.geeksforgeeks.org/wp-content/uploads/jobassignment.png";

    let aux;

    const children = [];

    // goes in the Homework Feed ( NewsFeed )
    const homework = [];


    const initialHomeworkState = createData();

    // UseReducer hook
    const [homeworkState, dispatch] = useReducer(reducer, initialHomeworkState);

    function reducer(homeworkState, action) {
        switch (action.type) {
            case 'uploadHomework':
                // addHomework(action.payload.name, action.payload.imageUrl, action.payload.dateSet, action.payload.dateDue, children)
                addHomework(action.payload, tempHomeworkUrl, "week ago", "next week", children);
                break;
            case 'uploadMarkedHomework':

                break;
            default:
                console.log("fix the reducer");
            //throw new Error();
        }
    }



    // Functions to create and update data


    function addChild(name, avatarUrl = defaultAvatarUrl, homeworkStatus = "not done", individualHomeworkImage = null) {
        children.push({ name: name, avatar: avatarUrl, homeworkStatus: homeworkStatus, individualHomeworkImage: individualHomeworkImage })
    }

    // at present homework is just assigned to all children
    function addHomework(name, imageUrl, dateSet, dateDue, comment) {
        homework.push({
            name: name, image: imageUrl, dateSet: dateSet, dateDue: dateDue, comment: comment, children: JSON.parse(JSON.stringify(children))
        })

    }


    function createData() {
        // create children
        addChild("Cindy");
        addChild("Mitch");
        addChild("Elaine");
        addChild("Rupert");
        addChild("Janice");
        addChild("Fifi");


        // create homework
        addHomework("Maths week 1", tempHomeworkUrl, "yesterday", "tommorow", "");
        addHomework("English week 1", tempHomeworkUrl, "yesterday", "tommorow", "");
        addHomework("Art week 1", tempHomeworkUrl, "yesterday", "tommorow", "");
        addHomework("Art week 1", "https://static.thenounproject.com/png/363640-200.png", "yesterday", "tommorow", "");

        return homework;
    }

    // return the useReducer hook
    return [homeworkState, dispatch];
}

export default Database
    ;