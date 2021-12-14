import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pastLaunches: [
        {rocketId: 1, rocketName: 'Falcon', name: 'PAST 1'},
        {rocketId: 2, rocketName: 'Falcon 2', name: 'PAST 2'},
        {rocketId: 3, rocketName: 'Falcon 3', name: 'PAST 3'}
    ],
    currentLaunches: [],
    myLaunches: [
        {rocketId: 10, rocketName: 'Falcon', name: 'Dragon 1'},
        {rocketId: 11, rocketName: 'Falcon 2', name: 'Dragon 2'},
        {rocketId: 12, rocketName: 'Falcon 3', name: 'Dragon 3'}
    ],
    alert: '',
    showAlert: false,
    page: 1,
    launchDetails: {},
    modal: false
};


export const launchSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload
            state.showAlert = !state.showAlert
        },
        switchPage: (state, action) => {state.page = action.payload},
        switchModal: (state, action) => {state.modal = !state.modal},
        getCurrentLaunches: (state, action) => {
            state.currentLaunches = action.payload
        },
        detailPage:  (state, action) => {
            console.log(action)
            const data = `state.${action.payload.parentArr}`.filter(i => i.id === action.payload.id)
            console.log(data)
        },
    },

    extraReducers: (builder) => {

    },
});

const {actions, reducer} = launchSlice;
export default reducer;
export const {
    setAlert, switchPage, switchModal, getCurrentLaunches, detailPage
} = actions;


