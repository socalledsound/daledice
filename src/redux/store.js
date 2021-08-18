import { createStore, combineReducers } from 'redux';
import { userReducer } from './loginReducer';
import { diceRollReducer } from './diceRollRedux/diceRollReducer';
import gameReducer from './gameReducer/gameReducer';

const rootReducer = combineReducers({
    user: userReducer,
    dice: diceRollReducer,
    game: gameReducer,
})
const store = createStore(rootReducer);

export default store;