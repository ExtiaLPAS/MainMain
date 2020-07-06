import { createStore, combineReducers  } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
import toggleProfile from './Reducers/profileReducer'

export default createStore(combineReducers({toggleFavorite, toggleProfile}))