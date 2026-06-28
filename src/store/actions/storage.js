export function updateStore(data) {
    return dispatch => {
        dispatch({
            type: "UPDATE_STORE",
            payload: data
        })
    }
}