import { SET_LOADER } from "../actions/loader";

export default function loader (state = false, action) {
    switch (action.type) {
        case SET_LOADER :
            return action.bool;
        default:
            return state;
    }
}