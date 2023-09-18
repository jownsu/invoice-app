/* React */
import React from "react";

/* Components */
import InvoiceStatus from "../../../global/invoice_status/invoice_status.component";

/* CSS */
import styles from "./invoice_header.module.scss";

const InvoiceHeader = () => {
    return (
        <div className={styles.invoice_header}>
            <p className={styles.status_label}>Status</p>
            <InvoiceStatus 
                className={styles.status}
                status={2}
            />
            <div className={styles.invoice_actions}>
                <button type="button" className={styles.edit}>
                    Edit
                </button>
                <button type="button" className={styles.delete}>
                    Delete
                </button>
                <button type="button" className={styles.mark_as_paid}>
                    Mark as Paid
                </button>
            </div>

        </div>
    )
}

export default InvoiceHeader;