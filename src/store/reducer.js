import { ADD_PERSONAL_DETAILS } from "./Actions.js";
const initialState = {
    personalDetails: {}
};

const reducer= (state= initialState, action) => {
    switch(action.type){
        case ADD_PERSONAL_DETAILS:
        return {
            ...state,
            personalDetails: action.payload,
        };
        default:
            return state;
    }
};
export default reducer;