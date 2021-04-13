import { useEffect } from "react";
import * as actions from "../libs/actions";
import { UseAppContext } from "../appContext";

function useFetch() {
  const { state, dispatch } = UseAppContext();
  const BACK_END = "http://localhost:5000";
  const GET_PUPILS = "Homework";

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`${BACK_END}/${GET_PUPILS}`);
      let data = await response.json();
      console.log(data);
      dispatch({ type: actions.FETCH, payload: data });
    }

    fetchData();
  }, [dispatch]);

  return state;
}

export default useFetch;
