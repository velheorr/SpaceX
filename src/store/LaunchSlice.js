import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pastLaunches: [],
    currentLaunches: [],
    myLaunches: [],
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
            console.log(action.payload.res)
            state.launchDetails = action.payload.res
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


