import axios from 'axios';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

export function getSmurf() {
    console.log('get that smurf')
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START });
        axios
            .get('http://localhost:3333/smurfs/')
            .then(res => 
                 dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data}),
            )
            .catch(err => dispatch({ type: FETCH_SMURF_ERROR, payload: err }));
    }
};



export function addSmurf(newSmurf) {
    return dispatch => {
        dispatch({type: ADD_SMURF, payload: newSmurf})
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
                .then((res) => {
                    console.log(res);
                })
    }
}

export function deleteSmurf(deletedSmurf) {
    return dispatch => {
        dispatch({type: DELETE_SMURF, payload: deletedSmurf})
        axios
         .delete(`http://localhost:3333/smurfs/${deletedSmurf.id}`)
         .then((res) =>{
             console.log(res)
         })
    }
}