import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticket: null,
    isBooked: false,
    error: null
};

const bookTicketSlice = createSlice({
    name: "bookTicket",
    initialState,
    reducers: {
        bookTicket: (state, action) => {
            state.ticket = action.payload;
            state.isBooked = true;
            state.error = null;
        },
        resetBookingStatus: (state) => {
            state.isBooked = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { bookTicket, resetBookingStatus, setError } = bookTicketSlice.actions;
export const bookTicketReducer = bookTicketSlice.reducer;