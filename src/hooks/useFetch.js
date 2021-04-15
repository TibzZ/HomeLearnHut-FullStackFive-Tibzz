import { useEffect } from "react";
import * as actions from "../libs/actions";
import { UseAppContext } from "../appContext";
import dateFormat from "dateformat";

function useFetch() {
  const { dispatch, refreshSwitch, state } = UseAppContext();

  const BACK_END = "http://localhost:5000";
  const GET_PUPILS = "Homework";

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`${BACK_END}/${GET_PUPILS}`);
      let data = await response.json();
      console.log(data);

      let mySQLDate;
      let altDate;
      let formattedDate

      for (let i = 0; i < data.length; i++) {
        // mySQLDate = data[i].dateset;
        altDate = new Date(Date.parse(data[i].dateset));
        data[i].dateset = dateFormat(altDate.toJSON(), "mmmm dS, yyyy");
        // console.log(`this date ${formattedDate}`);
      }
      dispatch({ type: actions.FETCH, payload: data });
    }

    fetchData();
  }, [refreshSwitch]);

  return state;
}

export default useFetch;
