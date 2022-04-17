import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";

import {teacherreducer} from './Teacher/reducer'
import {userreducer} from "./User/reducer"

const rootreducer=combineReducers({

teacher:teacherreducer,
user:userreducer



})



export const store=createStore(rootreducer,applyMiddleware(thunk))