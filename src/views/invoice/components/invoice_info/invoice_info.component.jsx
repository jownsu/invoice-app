/* React */
import React from "react";

/* Plugins */
import moment from "moment";

/* Components */
import ItemList from "../item_list/item_list.component";

/* CSS */
import styles from "./invoice_info.module.scss";

const InvoiceInfo = ({invoice}) => {

    const { 
        id, 
        description, 
        sender_address, 
        created_at, 
        client_name, 
        client_email, 
        payment_due, 
        client_address, 
        total, 
        items 
    } = invoice;

    return (
        <div className={styles.invoice_info}>
            <div className={styles.info_container}>
                <div className={styles.id}>
                    <b><span>#</span>{id}</b>                    
                    <p>{description}</p>
                </div>
                <div className={styles.address}>
                    <p>{sender_address.street}</p>
                    <p>{sender_address.city}</p>
                    <p>{sender_address.post_code}</p>
                    <p>{sender_address.country}</p>
                </div>
                <div className={styles.date}>
                    <p>Invoice Date</p>
                    <b>{moment(created_at).format("DD MMM YYYY")}</b>
                </div>
                <div className={styles.bill_to}>
                    <p>Bill To</p>
                    <b>{client_name}</b>
                </div>
                <div className={styles.sent_to}>
                    <p>Sent to</p>
                    <b>{client_email}</b>
                </div>
                <div className={styles.payment_due}>
                    <p>Payment Due</p>
                    <b>{moment(payment_due).format("DD MMM YYYY")}</b>
                </div>
                <div className={styles.address_to}>
                    <p>{client_address.street}</p>
                    <p>{client_address.city}</p>
                    <p>{client_address.post_code}</p>
                    <p>{client_address.country}</p>
                </div>
            </div>
            <ItemList items={items} />
            <div className={styles.total}>
                <span>Amount Due</span>
                <p>£ {total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default InvoiceInfo;