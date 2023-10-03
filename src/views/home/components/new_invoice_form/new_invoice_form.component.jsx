import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../item/item.component";
import ReactDatePicker from "react-datepicker";
import styles from "./new_invoice_form.module.scss";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
const NewInvoiceForm = ({onClose}) => {

    const [is_invoice_date_open, setIsInvoiceDateOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleNewInvoiceSubmit = (form_data) => {
        console.log(form_data);
    }

    const customDateHeader = ({decreaseMonth, increaseMonth, monthDate}) => {
        return (
            <div className={styles.date_head}>
                <button 
                    onClick={decreaseMonth} 
                    type="button"
                    className={styles.prev_btn}
                >
                </button>
                <p className={styles.date_text}>{moment(monthDate).format("MMM YYYY")}</p>
                <button 
                    onClick={increaseMonth} 
                    type="button"
                    className={styles.next_btn}
                >
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(handleNewInvoiceSubmit)} className={styles.new_invoice_form}>
            <h3>New Invoice</h3>

            <div className={styles.bill_from}>
                <h4>Bill From</h4>
                <div className={styles.input_container}>
                    <div className={styles.input_group}>
                        <label htmlFor="street_address">Street Address</label>
                        <input type="text" id="street_address"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="post_code">Post Code</label>
                        <input type="text" id="post_code"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country"/>
                    </div>
                </div>
            </div>

            <div className={styles.bill_to}>
                <h4>Bill To</h4>
                <div className={styles.input_container}>
                    <div className={styles.input_group}>
                        <label htmlFor="client_name">Client's Name</label>
                        <input type="text" id="client_name"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="client_email">Client's Email</label>
                        <input type="text" id="client_email"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="client_street_address">Street Address</label>
                        <input type="text" id="post_code"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="client_city">City</label>
                        <input type="text" id="client_city"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="client_post_code">Post Code</label>
                        <input type="text" id="client_post_code"/>
                    </div>
                    <div className={styles.input_group}>
                        <label htmlFor="client_country">Country</label>
                        <input type="text" id="client_country"/>
                    </div>
                </div>
            </div>

            <div className={styles.invoice}>
                <div className={`${styles.input_group} ${styles.invoice_date_container}`}>
                    <label htmlFor="invoice_date">Invoice Date</label>
                    <ReactDatePicker
                        className={styles.invoice_date} 
                        value="21 Aug 2021" 
                        renderCustomHeader={customDateHeader}
                        open={is_invoice_date_open}
                        readOnly
                        onClickOutside={() => setIsInvoiceDateOpen(false)}
                        onInputClick={() => setIsInvoiceDateOpen(true)}
                        onSelect={() => setIsInvoiceDateOpen(false)}
                    />
                    <span className={`${styles.calendar_icon} ${is_invoice_date_open ? styles.active : ""}`}></span>
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="payment_terms">Payment Terms</label>
                    <Dropdown className={styles.payment_terms}>
                        <Dropdown.Toggle>Net 30 Days</Dropdown.Toggle>
                        <Dropdown.Menu className={styles.payment_terms_menu}>
                            <div className={styles.payment_terms_option}>
                                Net 1 Day
                            </div>
                            <div className={styles.payment_terms_option}>
                                Net 7 Days
                            </div>
                            <div className={styles.payment_terms_option}>
                                Net 14 Days
                            </div>
                            <div className={styles.payment_terms_option}>
                                Net 30 Days
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="project_description">Project Description</label>
                    <input type="text" id="project_description"/>
                </div>
            </div>

            <div className={styles.item_list_container}>
                <h5>Item List</h5>
                <div className={styles.item_list_header}>
                    <p>Item Name</p>
                    <p>Qty.</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>

                <Item />
            </div>
        </form>
    )
}

export default NewInvoiceForm;