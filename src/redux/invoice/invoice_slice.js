import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data.json";
import moment from "moment"

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

function generateRandomID() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random_letters = "";
    for (let i = 0; i < 2; i++) {
        const random_index = Math.floor(Math.random() * letters.length);
        random_letters += letters.charAt(random_index);
    }
  
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const randomID = random_letters + randomDigits;
    return randomID;
  }

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        selectInvoice: (state, action) => {
            state.selected_invoice = state.invoice_list.find(invoice => invoice.id === action.payload.invoice_id) ?? initial_selected_invoice_state;
        },
        addInvoice: (state, action) => {
            let new_invoice = {
                id: generateRandomID(),
                ...action.payload,
            };

            /* Setup payment due based on created at and payment terms */
            let created_at = moment(new_invoice.created_at, "YYYY-MM-DD");
            new_invoice.payment_due = created_at.add(new_invoice.payment_terms, "days").format("YYYY-MM-DD");

            /* Setup the overll total items */
            new_invoice.total = new_invoice.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

            state.invoice_list.push(new_invoice);
        },
        deleteInvoice: (state, action) => {
            state.invoice_list = state.invoice_list.filter(invoice => invoice.id !== action.payload.invoice_id);
        }
    }
});

export const { selectInvoice, addInvoice, deleteInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;