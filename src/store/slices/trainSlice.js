import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trainList: [],
    error:null,
    count:0
}

const trainSlice = createSlice({
    name: "train",
    initialState,
    reducers: {
        setTrains :(state,action) => {
            state.trainList = action.payload 
            state.count = state.trainList.length;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },

    }
});

export const {setTrains,setError} = trainSlice.actions;

export const trainReducer = trainSlice.reducer;