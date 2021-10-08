import { combineReducers } from "redux";
import {SideBarReducer,WindowReducer} from './reducers'

const reducers=combineReducers({
    sidebar:SideBarReducer,
    window:WindowReducer
});

export default reducers;