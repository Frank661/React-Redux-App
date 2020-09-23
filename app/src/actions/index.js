
import axios from "axios";


export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";


export const fetchData = () => (dispatch) => {



  setTimeout(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/2")
      .then((res) => {
       

        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: { image: res.data.image,
                    name: res.data.name }
        });
      })
  }, 5000);


};

