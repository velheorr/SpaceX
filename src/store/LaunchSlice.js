import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    futureLaunches: [
        {rocket_id: 1, rocket_name: 'Falcon', name: 'name 1'},
        {rocket_id: 2, rocket_name: 'Falcon 2', name: 'name 2'},
        {rocket_id: 3, rocket_name: 'Falcon 3', name: 'name 3'}
    ]
};


export const launchSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        openCatalog: (state, action) => {state.futureLaunches = action.payload},

    },

    extraReducers: (builder) => {

    },
});

const {actions, reducer} = launchSlice;
export default reducer;
export const {
    openCatalog
} = actions;


