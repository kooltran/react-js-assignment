import { tripsApi } from '../tripsApi'

export const tripAction = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_TRIP_REQUEST' })
        return tripsApi()
            .then(res => {
                console.log(res, 'res kakaka')
                return dispatch({ type: 'FETCH_TRIP_SUCCESS', res })
            })
            .catch(error => dispatch({ type: 'FETCH_TRIP_FAIL', error }))
    }
}
