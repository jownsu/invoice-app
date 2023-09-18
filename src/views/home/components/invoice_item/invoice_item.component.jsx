import React from "react";

/* Plugins */
import moment from "moment/moment";

/* Components */
import InvoiceStatus from "../../../global/invoice_status/invoice_status.component";

/* CSS */
import styles from "./invoice_item.module.scss";

const InvoiceItem = ({invoice}) => {
    const { id, paymentDue, clientName, total, status } = invoice;

    return(
        <div className={styles.invoice_item}>
            <p className={styles.id}><span>#</span>{id}</p>
            <p className={styles.payment_due}>Due {moment(paymentDue).format("DD MMM YYYY")}</p>
            <p className={styles.client_name}>{clientName}</p>
            <p className={styles.total}>£ {total.toFixed(2)}</p>
            <InvoiceStatus 
                className={styles.status}
                status={status}
            />
            <button type="button"><span className={styles.right_arrow_icon}></span></button>
        </div>
    )
}

export default InvoiceItem;