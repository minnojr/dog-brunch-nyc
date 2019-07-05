export const SET_LOADER = 'SET_LOADER';

export function setLoader(bool) {
    return {
        type: SET_LOADER,
        bool
    }
}