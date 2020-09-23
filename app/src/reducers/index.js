

import {
    FETCH_DATA_SUCCESS,
  } from "../actions";
  
  const initialState = {
    comic_data: {
      image: "",
      name: ""
    },
 
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
   
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
    
          comic_data: action.payload,
     
        };
    
        
      default:
        return state;
    }
  };
  