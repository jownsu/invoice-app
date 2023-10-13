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
                created_at: "2021-08-18",
                payment_due: "2021-08-19",
                description: "Re-branding",
                payment_terms: 1,
                client_name: "Jensen Huang",
                client_email: "jensenh@mail.com",
                status: 1,
                sender_address: {
                  street: "19 Union Terrace",
                  city: "London",
                  post_code: "E1 3EZ",
                  country: "United Kingdom"
                },
                client_address: {
                  street: "106 Kendell Street",
                  city: "Sharrington",
                  post_code: "NR24 5WQ",
                  country: "United Kingdom"
                },
                items: [
                  {
                    name: "Brand Guidelines",
                    quantity: 1,
                    price: 1800.9,
                    total: 1800.9
                  }
                ],
                total: 1800.9
            }
            state.invoice_list.push(new_invoice);
        },
        deleteInvoice: (state, action) => {
            state.invoice_list = state.invoice_list.filter(invoice => invoice.id !== action.payload.invoice_id);
        }
    }
});

export const { selectInvoice, addInvoice, deleteInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;