import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    futureLaunches: [
        {rocket_id: 1, rocket_name: 'Falcon', name: 'name'}
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

const {actions, reducer} = catalogSlice;
export default reducer;
export const {
    openCatalog
} = actions;


