export const ADD_PERSONAL_DETAILS = "ADD_PERSONAL_DETAILS";
// WHY?
export const addPersonalDetails = (details) => ({
    type: ADD_PERSONAL_DETAILS, //DEFINES TYPE OF ACTION
    payload:details //DATA TO CHANGE THE STATE
});