/* React */
import React, { useState, useEffect } from "react";

/* Plugins */
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Dropdown from "react-bootstrap/Dropdown";
import ReactDatePicker from "react-datepicker";
import moment from "moment";

/* Component */
import Item from "../item/item.component";

/* CSS */
import styles from "./invoice_form.module.scss";

import "react-datepicker/dist/react-datepicker.css";

const InvoiceForm = (props) => {

    const {
        onClose, 
        is_edit = false, 
        onFormSubmit = () => {},
        selected_invoice
    } = props;

    const default_value = {
        created_at: moment().format("YYYY-MM-DD"),
        payment_due: "",
        description: "",
        payment_terms: 1,
        client_name: "",
        client_email: "",
        status: 2,
        sender_address: {
            street: "",
            city: "",
            post_code: "",
            country: ""
        },
        client_address: {
            street: "",
            city: "",
            post_code: "",
            country: ""
        },
        items: [
            {
                name: "",
                quantity: 1,
                price: 0
            }
        ]
    };

    const [is_invoice_date_open, setIsInvoiceDateOpen] = useState(false);
    const { 
            register, 
            handleSubmit, 
            watch, 
            control, 
            formState: { errors }, 
            setValue,
            setError,
            clearErrors
        } = useForm({defaultValues: is_edit ? selected_invoice : default_value}
    );

    const {fields: item_fields, append, remove} = useFieldArray({
        control,
        name: "items"
    });

    let items_field = watch("items");

    useEffect(() => {
        if(!items_field.length){
            setError("items_empty", {
                types: {
                    required: true
                }
            });
        }
        else{
            clearErrors("items_empty");
        }
    }, [items_field]);

    const handleNewInvoiceSubmit = (form_data) => {
        onFormSubmit(form_data);
        onClose();
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
            <button 
                type="button" 
                className={styles.btn_back}
                onClick={onClose}
            >
                <span className={styles.back_icon}></span>
                Go back
            </button>
            
            {
                !is_edit 
                    ? <h3>New Invoice</h3>
                    : <h3>Edit <span>#</span>XM9141</h3>
            }
            

            <div className={styles.bill_from}>
                <h4>Bill From</h4>
                <div className={styles.input_container}>
                    <div className={`${styles.input_group} ${errors?.sender_address?.street ? styles.input_error : ""}`}>
                        <label htmlFor="street_address">Street Address</label>
                        <input 
                            type="text" 
                            id="street_address"
                            {...register("sender_address.street", { required: true })}
                        />
                        { errors?.sender_address?.street && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.sender_address?.city ? styles.input_error : ""}`}>
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            id="city"
                            {...register("sender_address.city", { required: true })}
                        />
                        { errors?.sender_address?.city && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.sender_address?.post_code ? styles.input_error : ""}`}>
                        <label htmlFor="post_code">Post Code</label>
                        <input 
                            type="text" 
                            id="post_code"
                            {...register("sender_address.post_code", { required: true })}
                        />
                        { errors?.sender_address?.post_code && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.sender_address?.country ? styles.input_error : ""}`}>
                        <label htmlFor="country">Country</label>
                        <input 
                            type="text" 
                            id="country"
                            {...register("sender_address.country", { required: true })}
                        />
                        { errors?.sender_address?.country && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                </div>
            </div>

            <div className={styles.bill_to}>
                <h4>Bill To</h4>
                <div className={styles.input_container}>
                <div className={`${styles.input_group} ${errors?.client_name ? styles.input_error : ""}`}>
                        <label htmlFor="client_name">Client's Name</label>
                        <input 
                            type="text" 
                            id="client_name"
                            {...register("client_name", { required: true })}
                        />
                        { errors?.client_name && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.client_email ? styles.input_error : ""}`}>
                        <label htmlFor="client_email">Client's Email</label>
                        <input 
                            type="text" 
                            id="client_email"
                            {...register("client_email", { required: true })}
                        />
                        { errors?.client_email && <p className={styles.error_msg}>can't be empty</p> }

                    </div>
                <div className={`${styles.input_group} ${errors?.client_address?.street ? styles.input_error : ""}`}>
                        <label htmlFor="client_street_address">Street Address</label>
                        <input 
                            type="text" 
                            id="post_code"
                            {...register("client_address.street", { required: true })}
                        />
                        { errors?.client_address?.street && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.client_address?.city ? styles.input_error : ""}`}>
                        <label htmlFor="client_city">City</label>
                        <input 
                            type="text" 
                            id="client_city"
                            {...register("client_address.city", { required: true })}
                        />
                        { errors?.client_address?.city && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.client_address?.post_code ? styles.input_error : ""}`}>
                        <label htmlFor="client_post_code">Post Code</label>
                        <input 
                            type="text" 
                            id="client_post_code"
                            {...register("client_address.post_code", { required: true })}
                        />
                        { errors?.client_address?.post_code && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                <div className={`${styles.input_group} ${errors?.client_address?.country ? styles.input_error : ""}`}>
                        <label htmlFor="client_country">Country</label>
                        <input 
                            type="text" 
                            id="client_country"
                            {...register("client_address.country", { required: true })}
                        />
                        { errors?.client_address?.country && <p className={styles.error_msg}>can't be empty</p> }
                    </div>
                </div>
            </div>

            <div className={styles.invoice}>
                <div className={`${styles.input_group} ${styles.invoice_date_container}`}>
                    <label htmlFor="invoice_date">Invoice Date</label>
                    <Controller 
                        control={control}
                        name="created_at"
                        render={({field: { onChange, value }}) => (
                            <ReactDatePicker
                                className={styles.invoice_date} 
                                value={moment(value).format("DD MMM YYYY")}
                                onChange={(new_date) => onChange(moment(new_date).format("YYYY-MM-DD"))} 
                                renderCustomHeader={customDateHeader}
                                open={is_invoice_date_open}
                                minDate={new Date()}
                                readOnly
                                onClickOutside={() => setIsInvoiceDateOpen(false)}
                                onInputClick={() => setIsInvoiceDateOpen(true)}
                                onSelect={() => setIsInvoiceDateOpen(false)}
                            />
                        )}
                    />
                    <span className={`${styles.calendar_icon} ${is_invoice_date_open ? styles.active : ""}`}></span>
                </div>
                <div className={styles.input_group}>
                    <label htmlFor="payment_terms">Payment Terms</label>
                    <Dropdown className={styles.payment_terms}>
                        <Dropdown.Toggle>Net {watch("payment_terms")} Days</Dropdown.Toggle>
                        <Dropdown.Menu className={styles.payment_terms_menu}>
                            <Dropdown.Item
                                as="div"
                                className={styles.payment_terms_option}
                                onClick={() => setValue("payment_terms", 1)}
                            >
                                Net 1 Day
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as="div" 
                                className={styles.payment_terms_option}
                                onClick={() => setValue("payment_terms", 7)}
                            >
                                Net 7 Days
                            </Dropdown.Item>
                            <Dropdown.Item
                                as="div" 
                                className={styles.payment_terms_option}
                                onClick={() => setValue("payment_terms", 14)}
                            >
                                Net 14 Days
                            </Dropdown.Item>
                            <Dropdown.Item 
                                as="div" 
                                className={styles.payment_terms_option}
                                onClick={() => setValue("payment_terms", 30)}
                            >
                                Net 30 Days
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={`${styles.input_group} ${errors?.description ? styles.input_error : ""}`}>
                    <label htmlFor="project_description">Project Description</label>
                    <input 
                        type="text" 
                        id="project_description"
                        {...register("description", { required: true })}
                    />
                    { errors?.description && <p className={styles.error_msg}>can't be empty</p> }
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

                {
                    item_fields.map((item, index) => (
                        <Item 
                            key={item.id}
                            control={control}
                            name={`items.${index}`}
                            onDelete={() => remove(index)}
                            rules={{
                                validate: {
                                    requiredName: (value) => value.name.trim() ? true : false
                                }
                            }}
                            error={errors.items?.[index]}
                        />
                    ))
                }

                <button 
                    type="button" 
                    className={styles.add_item_btn}
                    onClick={() => append({
                        name: "",
                        quantity: 1,
                        price: 0
                    })}
                >
                    <span className={styles.add_icon}></span>+ Add New Item
                </button>
            </div>

            {
                !!Object.keys(errors).length && 
                    <div className={styles.form_error_container}>
                        <p>- All fields must be added</p>
                        {
                            errors?.items_empty &&
                                <p>- An item must be added</p>
                        }
                    </div>
            }

            {
                is_edit
                ? (
                    <div className={styles.actions_container}>
                        <button 
                            type="button" 
                            className={styles.btn_discard}
                            onClick={onClose}
                        >
                            Discard
                        </button>
                        <button 
                            type="submit" 
                            className={styles.btn_draft}
                            onClick={() => setValue("status", 3)}
                        >
                            Save as Draft
                        </button>
                        <button 
                            type="submit" 
                            className={styles.btn_save}
                            onClick={() => setValue("status", selected_invoice.status)}
                        >
                            Save & Send
                        </button>
                    </div>
                )
                : (
                    <div className={styles.actions_container}>
                        <button 
                            type="button" 
                            className={styles.btn_cancel}
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className={styles.btn_save_changes}>Save Changes</button>
                    </div>
                )
            }
        </form>
    )
}

export default InvoiceForm;