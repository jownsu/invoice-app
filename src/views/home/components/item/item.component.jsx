import React from "react";

import styles from "./item.module.scss";

function Item() {
    return (
        <div className={styles.item_container}>
            <div className={styles.input_group}>
                <label htmlFor="item_name">Item name</label>
                <input
                    id="item_name"
                    type="text"
                    className={styles.item_name}    
                />
            </div>

            <div className={styles.input_group}>
                <label htmlFor="quantity">Qty.</label>
                <input 
                    id="quantity"
                    type="text" 
                    className={styles.quantity}    
                />
            </div>

            <div className={styles.input_group}>
                <label htmlFor="price">Price</label>
                <input 
                    id="price"
                    type="text" 
                    className={styles.price}    
                />
            </div>

            <div className={styles.input_group}>
                <label htmlFor="total">Total</label>
                <p className={styles.total}>156.00</p>
            </div>
            <button className={styles.delete} type="button"></button>
        </div>
    )
}

export default Item;