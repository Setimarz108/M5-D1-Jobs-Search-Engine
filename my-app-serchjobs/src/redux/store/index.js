import { createStore,combineReducers, applyMiddleware, compose} from "redux";
import favoritesReducer from "../reducers/favoritesReducer";

import thunk from 'redux-thunk'
import jobsDataReducer from "../reducers/jobsDataReducer";

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState ={

    favorites :{
           
        favJobs : []
    },

    jobsData:{
         
        storage: [],
    }
}

const reducerMixer = combineReducers({
    favorites: favoritesReducer,
    jobsData: jobsDataReducer
})

let configStore =createStore(
   reducerMixer,
   initialState,
//    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
composeThatAlwaysWorks(applyMiddleware(thunk))

)

export default configStore