/* React */
import React from "react";
import { useParams } from "react-router-dom";

/* Components */
import BackButton from "./components/back_button/back_button.component";
import InvoiceHeader from "./components/invoice_header/invoice_header.component";
import InvoiceInfo from "./components/invoice_info/invoice_info.component";

/* CSS */
import styles from "./invoice.module.scss";

const Invoice = () => {

    const { invoice_id } = useParams();

    return(
        <div id={styles.invoice}>
            <BackButton />
            <InvoiceHeader />
            <InvoiceInfo />
        </div>
    )
}

export default Invoice;