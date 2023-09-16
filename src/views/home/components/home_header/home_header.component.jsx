/* React */
import React from "react";

/* Plugins */
import Dropdown from 'react-bootstrap/Dropdown';
import MediaQuery from "react-responsive";

/* CSS */
import styles from "./home_header.module.scss";

const HomeHeader = () => {

    return(
        <header className={styles.home_header}>
            <div className={styles.total_invoice}>
                <h1>Invoices</h1>
                <MediaQuery minWidth={601}>
                    <p>There are 7 total invoices</p>
                </MediaQuery>
                <MediaQuery maxWidth={600}>
                    <p>7 invoices</p>
                </MediaQuery>
            </div>

            <Dropdown className={styles.status_filter}>
                <Dropdown.Toggle>
                    Filter <MediaQuery minWidth={601}>By Status</MediaQuery>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.status_filter_menu}>
                    <div className={styles.filter_option}>
                        <input type="checkbox" name="status_draft" id="status_draft" />
                        <label for="status_draft">
                            <div className={styles.checkbox_container}></div>
                            Draft
                        </label>
                    </div>
                    <div className={styles.filter_option}>
                        <input type="checkbox" name="status_pending" id="status_pending" />
                        <label for="status_pending">
                            <div className={styles.checkbox_container}></div>
                            Pending
                        </label>
                    </div>
                    <div className={styles.filter_option}>
                        <input type="checkbox" name="status_paid" id="status_paid" />
                        <label for="status_paid">
                            <div className={styles.checkbox_container}></div>
                            Paid
                        </label>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <button type="button" className={styles.new_invoice_btn}>
                <span></span>
                New <MediaQuery minWidth={601}>Invoice</MediaQuery>
            </button>
        </header>
    )
}

export default HomeHeader;