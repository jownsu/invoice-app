import React from "react";
import styles from "./no_invoice.module.scss";

const NoInvoice = () => {
  return (
    <div className={styles.no_invoice}>
        <img src="./images/illustration-empty.svg" alt="Envelop with woman shouting" />
        <h3>There is nothing here</h3>
        <p>Create an invoice by clicking the <b>New Invoice</b> button ang get started</p>
    </div>
  )
}

export default NoInvoice;