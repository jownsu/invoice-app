/* React */
import React from "react";

/* Plugins */
import MediaQuery from "react-responsive";

/* CSS */
import styles from "./no_invoice.module.scss";

const NoInvoice = () => {
  return (
    <div className={styles.no_invoice}>
        <img src="./images/illustration-empty.svg" alt="Envelop with woman shouting" />
        <h3>There is nothing here</h3>
        <p>Create an invoice by clicking the <b>New <MediaQuery minWidth={601}>Invoice</MediaQuery></b> button ang get started</p>
    </div>
  )
}

export default NoInvoice;