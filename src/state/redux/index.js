import { combineReducers } from "redux";
import ui_reducers from './ui/reducers'


const reducers=combineReducers({
    ui:ui_reducers,
})

export default reducers;