import React from "react";

/* Plugins */
import moment from "moment/moment";
import { Link } from "react-router-dom";

/* Components */
import InvoiceStatus from "../../../global/invoice_status/invoice_status.component";

/* CSS */
import styles from "./invoice_item.module.scss";

const InvoiceItem = ({invoice}) => {
    const { id, payment_due, clientName, total, status } = invoice;

    return(
        <Link to={`invoice/${id}`} className={styles.invoice_item}>
            <p className={styles.id}><span>#</span>{id}</p>
            <p className={styles.payment_due}>Due {moment(payment_due).format("DD MMM YYYY")}</p>
            <p className={styles.client_name}>{clientName}</p>
            <p className={styles.total}>£ {total.toFixed(2)}</p>
            <InvoiceStatus 
                className={styles.status}
                status={status}
            />
            <button type="button"><span className={styles.right_arrow_icon}></span></button>
        </Link>
    )
}

export default InvoiceItem;