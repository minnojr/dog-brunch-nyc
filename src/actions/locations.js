import { locations } from "../utils/data";
import axios from 'axios';
import { setLoader } from "./loader";

export const RECEIVE_LOCATION = 'RECEIVE_LOCATIONS';

export function receiveLocation(location) {
    return {
        type: RECEIVE_LOCATION,
        location
    }
}


function getInfo(x, dispatch) {

    if (x === 5) {
        dispatch(setLoader(true));
    }

    if (x === locations.length -1) {
        return;
    }

    axios.get(`http://localhost:9000/testAPI/${locations[x].name}`)
        .then((response) => {
            dispatch(receiveLocation(response.data))
        });

    setTimeout(() => {
        x++;
        getInfo(x, dispatch);
    }, 1000)

}


export function handleReceiveLocations() {
    return async (dispatch) => {
        const index = 0;
        getInfo(index, dispatch);
    }
}