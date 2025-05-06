import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    tickets: [],
    count: 0,
    error: null
}

const bookedTicketsSlice = createSlice({
    name: "bookedTickets",
    initialState,
    reducers: {
        setBookedTickets: (state, action) => {
            state.tickets = action.payload;
            state.count = state.tickets.length;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setBookedTickets, setError } = bookedTicketsSlice.actions;
export const bookedTicketsReducer = bookedTicketsSlice.reducer;