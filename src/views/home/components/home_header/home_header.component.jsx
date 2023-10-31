/* React */
import React from "react";

/* Plugins */
import Dropdown from "react-bootstrap/Dropdown";
import MediaQuery from "react-responsive";

/* Constants */
import { INVOICE_STATUS } from "../../../../assets/constants/constants";

/* CSS */
import styles from "./home_header.module.scss";

const HomeHeader = ({status_filters, onStatusFilterChange, onNewInvoiceClick}) => {

    const toggleFilters = (status) => {
        let new_status_filters = [...status_filters];
        let filter_index = new_status_filters.indexOf(status);

        if(filter_index !== -1){
            new_status_filters.splice(filter_index, 1);
        }
        else{
            new_status_filters.push(status);
        }

        onStatusFilterChange(new_status_filters);
    }

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
                        <input 
                            type="checkbox" 
                            name="status_draft" 
                            id="status_draft" 
                            checked={status_filters.includes(INVOICE_STATUS.draft)}    
                            onChange={() => toggleFilters(INVOICE_STATUS.draft)}
                        />
                        <label htmlFor="status_draft">
                            <div className={styles.checkbox_container}></div>
                            Draft
                        </label>
                    </div>
                    <div className={styles.filter_option}>
                        <input 
                            type="checkbox" 
                            name="status_pending" 
                            id="status_pending" 
                            checked={status_filters.includes(INVOICE_STATUS.pending)}    
                            onChange={() => toggleFilters(INVOICE_STATUS.pending)}
                        />
                        <label htmlFor="status_pending">
                            <div className={styles.checkbox_container}></div>
                            Pending
                        </label>
                    </div>
                    <div className={styles.filter_option}>
                        <input 
                            type="checkbox" 
                            name="status_paid" 
                            id="status_paid" 
                            checked={status_filters.includes(INVOICE_STATUS.paid)}
                            onChange={() => toggleFilters(INVOICE_STATUS.paid)}
                        />
                        <label htmlFor="status_paid">
                            <div className={styles.checkbox_container}></div>
                            Paid
                        </label>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <button type="button" className={styles.new_invoice_btn} onClick={onNewInvoiceClick}>
                <span></span>
                New <MediaQuery minWidth={601}>Invoice</MediaQuery>
            </button>
        </header>
    )
}

export default HomeHeader;