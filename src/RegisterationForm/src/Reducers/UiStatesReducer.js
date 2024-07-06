import { legacy_createStore as createStore } from "redux";
import { StatesOfUI } from "../utilities/CommonStatesOfUi";

const UIStatesReducer = (states = StatesOfUI, action) => {
    switch (action.type) {
      case "admin":
 //       console.log(action.type,action.data)
        return {
          ...states,
          admin: action.data,
          };

        case "logout":
  //           console.log(action.type,action.data)
             return {
               ...states,
               logout: action.data,
               };
        default:
          return states;
         }
         
     
    }

    const store2 = createStore(UIStatesReducer);

export default store2;