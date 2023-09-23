import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data.json";

const initial_selected_invoice_state = {
    id: "",
    created_at: "",
    payment_due: "",
    description: "",
    payment_terms: 0,
    client_name: "",
    client_email: "",
    status: 0,
    sender_address: {
        street: "",
        city: "",
        post_code: "",
        country: ""
    },
    client_address: {
        street: "",
        city: "",
        post_code: "",
        country: ""
    },
    items: [
        {
            name: "",
            quantity: 0,
            price: 0,
            total: 0
        },
        {
            name: "",
            quantity: 0,
            price: 0,
            total: 0
        }
    ],
    total: 0
};

const initialState = {
    invoice_list: data,
    selected_invoice: initial_selected_invoice_state
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        selectInvoice : (state, action) => {
            state.selected_invoice = state.invoice_list.find(invoice => invoice.id === action.payload.invoice_id) ?? initial_selected_invoice_state;
        }
    }
});

export const { selectInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;