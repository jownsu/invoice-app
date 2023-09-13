import React from "react";

/* Plugins */
import moment from "moment/moment";

/* Constants */
import { INVOICE_STATUS } from "../../../../assets/constants/constants";

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
            <p className={`${styles.status} ${styles[INVOICE_STATUS[status]]}`}>
                <span className={styles.status_dot}></span>
                {INVOICE_STATUS[status]}
            </p>
            <button type="button"><span className={styles.right_arrow_icon}></span></button>
        </div>
    )
}

export default InvoiceItem;