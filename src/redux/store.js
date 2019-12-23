import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tripsReducder from './tripReducer'

export default function configureStorestore() {
    return createStore(tripsReducder, applyMiddleware(thunk))
}