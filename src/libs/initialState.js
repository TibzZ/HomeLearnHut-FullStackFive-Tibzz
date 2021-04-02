import { homework } from "./data/homework";
import * as pages from "./pages";

// Variables
export const initialState = { page: pages.LOADING, homeworkIndex: 0, childIndex: 0, homework: [...homework] };
