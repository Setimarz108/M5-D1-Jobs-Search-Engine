import { createStore,combineReducers, applyMiddleware, compose} from "redux";
import favoritesReducer from "../reducers/favoritesReducer";
import thunk from 'redux-thunk'
import jobsReducer from "../reducers/jobsReducer";


const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState ={

    favorites :{
           
        favJobs : []
    },

   jobs:[]
}

const reducerMixer = combineReducers({
    favorites: favoritesReducer,
    jobs: jobsReducer
})

let configStore =createStore(
   reducerMixer,
   initialState,
//    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
composeThatAlwaysWorks(applyMiddleware(thunk))

)

export default configStore