import { RECEIVE_LOCATION } from "../actions/locations";

export default function locations (state = {}, action) {
    switch (action.type) {
        case RECEIVE_LOCATION :
            return {
                ...state,
                [action.location.id]: action.location
            };
        default:
            return state;
    }
}