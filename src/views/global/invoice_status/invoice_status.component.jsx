/* React */
import React from "react";

/* Constants */
import { INVOICE_STATUS } from "../../../assets/constants/constants";

/* CSS */
import styles from "./invoice_status.module.scss";

const InvoiceStatus = ({status, className}) => {
    return (
        <div className={`${styles.status} ${styles[INVOICE_STATUS[status]]} ${className}`}>
            <span className={styles.status_dot}></span>
            {INVOICE_STATUS[status]}
        </div>
    )
}

export default InvoiceStatus;