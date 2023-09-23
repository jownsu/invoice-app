import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../redux/invoice/invoice_slice";

export const store = configureStore({
    reducer: {
        invoice: invoiceReducer
    }
});