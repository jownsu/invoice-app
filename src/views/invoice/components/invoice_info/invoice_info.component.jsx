/* React */
import React from "react";

/* Components */
import ItemList from "../item_list/item_list.component";

/* CSS */
import styles from "./invoice_info.module.scss";

const InvoiceInfo = () => {
    return (
        <div className={styles.invoice_info}>
            <div className={styles.info_container}>
                <div className={styles.id}>
                    <b><span>#</span>XM9141</b>                    
                    <p>Graphic Design</p>
                </div>
                <div className={styles.address}>
                    <p>19 Union Terrace</p>
                    <p>London</p>
                    <p>E1 3EZ</p>
                    <p>United Kingdom</p>
                </div>
                <div className={styles.date}>
                    <p>Invoice Date</p>
                    <b>21 Aug 2021</b>
                </div>
                <div className={styles.bill_to}>
                    <p>Bill To</p>
                    <b>Alex Grim</b>
                </div>
                <div className={styles.sent_to}>
                    <p>Sent to</p>
                    <b>alexgrim@mail.com</b>
                </div>
                <div className={styles.payment_due}>
                    <p>Payment Due</p>
                    <b>20 Sep 2021</b>
                </div>
                <div className={styles.address_to}>
                    <p>84 Church Way</p>
                    <p>Bradford</p>
                    <p>BD1 9PB</p>
                    <p>United Kingdom</p>
                </div>
            </div>
            <ItemList />
            <div className={styles.total}>
                <span>Amount Due</span>
                <p>£ 556.00</p>
            </div>
        </div>
    )
}

export default InvoiceInfo;