const initialState = {
    fetchTripRequest: true,
    fetchTripSuccess: false,
    fetchTripFail: false,
    data: {},
    error: null,
}

export default function tripReducder(state = initialState, action) {
    switch (action.type) {
        case "FETCH_TRIP_REQUEST":
            return {
                ...state,
                fetchTripRequest: true,
            }
        case "FETCH_TRIP_SUCCESS":
            return {
                ...state,
                fetchTripRequest: false,
                fetchTripSuccess: false,
                data: action.res,
            }
        case "FETCH_TRIP_FAIL":
            return {
                ...state,
                fetchTripFail: true,
                error: action.res,
            }
        default:
            return state
    }
}
