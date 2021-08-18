import { GameActionTypes  } from "./GameActionTypes";


const initialState = {
    diceHistory : [["three","four"]]
}

const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case GameActionTypes.ADD_DICE_TO_HISTORY :
            console.log(action.payload)
            console.log(state.diceHistory)
            return {
                ...state,
                diceHistory: [...state.diceHistory, action.payload]
            }
        default : 
            return {
                ...state
            }
    }
}

export default gameReducer