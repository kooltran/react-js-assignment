import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { tripAction } from './tripAction'
import fetchMock from 'fetch-mock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tripAction', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('creates FETCH_TRIP_SUCCESS when fetching trips has been done', () => {
        fetchMock.getOnce('/trips', {
            body: { trips: [] },
            headers: { 'content-type': 'application/json' }
        })
        const expectedActions = [
            { type: "FETCH_TRIP_REQUEST" },
            { type: "FETCH_TRIP_SUCCESS", body: { trips: [] } }
        ]
        const store = mockStore({ todos: [] })
        return store.dispatch(tripAction()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})