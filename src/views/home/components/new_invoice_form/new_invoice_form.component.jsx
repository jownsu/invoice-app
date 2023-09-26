import React from "react";
import { useForm } from "react-hook-form";

import styles from "./new_invoice_form.module.scss";

const NewInvoiceForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleNewInvoiceSubmit = (form_data) => {
        console.log(form_data);
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
        </form>
    )
}

export default NewInvoiceForm;