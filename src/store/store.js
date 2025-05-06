import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice.js';
import { bookTicketReducer } from './slices/bookTicketSlice.js';
import { bookedTicketsReducer } from './slices/bookedTicketsSlice.js';
import { trainReducer } from './slices/trainSlice.js';
const store = configureStore({
    reducer: {
        auth: authReducer,
        bookTicket: bookTicketReducer,
        bookedTickets: bookedTicketsReducer,
        train: trainReducer
    }
})

export  {store};