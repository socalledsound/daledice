import { UserActionTypes } from "./actionTypes";

export const setUserInfo = (values) => ({
    type: UserActionTypes.SET_USER_INFO,
    payload: values

});

export const setDiceHistory = (values) => ({
    type: UserActionTypes.SET_DICE_HISTORY,
    payload: values
});
