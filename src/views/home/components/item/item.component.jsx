/* React */
import React from "react";

/* Plugins */
import { useController } from "react-hook-form";

/* CSS */
import styles from "./item.module.scss";

function Item(props){
    const { name, control, rules, error = false, onDelete } = props;
    const { field } = useController({
        control,
        name,
        rules
    });

    const handleOnChange = (event, field_name) => {
        field.onChange({
            ...field.value,
            [field_name]: field_name == "name" ? event.target.value : +event.target.value 
        });
    }

    return (
        <div className={styles.item_container}>
            <div className={`${styles.input_group} ${error ? styles.input_error : ""}`}>
                <label htmlFor="item_name">Item name</label>
                <input
                    id="item_name"
                    type="text"
                    className={styles.item_name}
                    value={field.value.name}    
                    onChange={(event) => handleOnChange(event, "name")}
                />
                {error && <p className={styles.error_msg}>can't be empty</p>}
            </div>

            <div className={styles.input_group}>
                <label htmlFor="quantity">Qty.</label>
                <input 
                    id="quantity"
                    type="number"
                    className={styles.quantity}    
                    value={field.value.quantity}
                    onChange={(event) => handleOnChange(event, "quantity")}
                />
            </div>

            <div className={styles.input_group}>
                <label htmlFor="price">Price</label>
                <input 
                    id="price"
                    type="number"
                    className={styles.price}    
                    value={field.value.price}    
                    onChange={(event) => handleOnChange(event, "price")}
                />
            </div>

            <div className={styles.input_group}>
                <label htmlFor="total">Total</label>
                <p className={styles.total}>{(field.value.price * field.value.quantity).toFixed(2)}</p>
            </div>
            <button 
                className={styles.delete} 
                type="button"
                onClick={onDelete}
            ></button>
        </div>
    )
}

export default Item;