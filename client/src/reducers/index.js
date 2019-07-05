import { combineReducers } from "redux";

import locations from './locations'
import loader from './loader'

export default combineReducers({
    loader,
    locations
});