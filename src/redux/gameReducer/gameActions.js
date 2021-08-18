import { GameActionTypes } from "./GameActionTypes"

export const addDiceToHistory = (values ) => ({
    type: GameActionTypes.ADD_DICE_TO_HISTORY,
    payload: values
})