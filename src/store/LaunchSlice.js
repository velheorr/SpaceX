import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pastLaunches: [],
    currentLaunches: [],
    myLaunches: [],
    alert: '',
    showAlert: false,
    page: 1,
    launchDetails: {},
    modal: false,
    modalData: {}
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
        addModalData: (state, action) => {state.modalData = action.payload},
        getPastLaunches: (state, action) => {state.pastLaunches = action.payload},
        getCurrentLaunches: (state, action) => {state.currentLaunches = action.payload},
        addMyLaunch: (state, action) => {state.myLaunches.push(action.payload)},
        delMyLaunch: (state, action) => {
            state.myLaunches = state.myLaunches.filter(item => {
                return item.name !== action.payload
            })
        },
        detailPage:  (state, action) => {state.launchDetails = action.payload.res},
    },
    extraReducers: (builder) => {

    },
});

const {actions, reducer} = launchSlice;
export default reducer;
export const {
    setAlert, switchPage, switchModal, getCurrentLaunches, getPastLaunches, detailPage, addMyLaunch, delMyLaunch, addModalData
} = actions;


