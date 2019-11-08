import {
    FETCH_SMURF_ERROR,
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    ADD_SMURF
} from '../Actions/Actions'


const initialState = {
}

export function reducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_SMURF_START:
            console.log('hi')
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                smurf: action.payload,
                isLoading: false
            };
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case ADD_SMURF:
            return {
                smurf: [
                    ...state.smurf,
                    action.payload
                ]
            }
            default: 
            return {
                ...state
            }
    }
}
