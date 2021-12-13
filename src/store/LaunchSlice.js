import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    pastLaunches: [
        {rocket_id: 1, rocket_name: 'Falcon', name: 'PAST 1'},
        {rocket_id: 2, rocket_name: 'Falcon 2', name: 'PAST 2'},
        {rocket_id: 3, rocket_name: 'Falcon 3', name: 'PAST 3'}
    ],
    currentLaunches: [
        {rocket_id: 5, rocket_name: 'Falcon', name: 'name 1'},
        {rocket_id: 6, rocket_name: 'Falcon 2', name: 'name 2'},
        {rocket_id: 7, rocket_name: 'Falcon 3', name: 'name 3'}
    ],
    myLaunches: [
        {rocket_id: 10, rocket_name: 'Falcon', name: 'Dragon 1'},
        {rocket_id: 11, rocket_name: 'Falcon 2', name: 'Dragon 2'},
        {rocket_id: 12, rocket_name: 'Falcon 3', name: 'Dragon 3'}
    ],
    alert: '',
    showAlert: false,
    page: 1,
    modal: false
};


export const launchSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        /*setAlert: (state, action) => {state.alert = action.payload.name},*/
        setAlert: (state, action) => {
            state.alert = action.payload
            console.log(action)
            state.showAlert = !state.showAlert
        },
        switchPage: (state, action) => {state.page = action.payload},
        switchModal: (state, action) => {state.modal = !state.modal},
    },

    extraReducers: (builder) => {

    },
});

const {actions, reducer} = launchSlice;
export default reducer;
export const {
    setAlert, switchPage, switchModal
} = actions;


