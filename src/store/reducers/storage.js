const defaultState = {
    fetching: false,
    status: 0,
    data: {},
    message: "",
}

export default function storageReducer(state = defaultState, action) {
    switch (action.type) {
        case "UPDATE_STORE": {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state;
        }
    }
}