/* React */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { selectInvoice } from "../../redux/invoice/invoice_slice";

/* Components */
import BackButton from "./components/back_button/back_button.component";
import InvoiceHeader from "./components/invoice_header/invoice_header.component";
import InvoiceInfo from "./components/invoice_info/invoice_info.component";

/* CSS */
import styles from "./invoice.module.scss";

const Invoice = () => {

    const { invoice_id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selectInvoice({invoice_id: invoice_id}));
    }, []);

    const { selected_invoice } = useSelector(state => state.invoice);

    return(
        <div id={styles.invoice}>
            <BackButton />
            <InvoiceHeader invoice_status={selected_invoice.status} />
            <InvoiceInfo invoice={selected_invoice} />
        </div>
    )
}

export default Invoice;