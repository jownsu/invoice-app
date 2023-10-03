import React from "react";

import styles from "./item.module.scss";

function Item() {
    return (
        <div className={styles.item_container}>
            <input
                type="text"
                className={styles.item_name}    
            />
            <input 
                type="text" 
                className={styles.quantity}    
            />
            <input 
                type="text" 
                className={styles.price}    
            />
            <p className={styles.total}>156.00</p>
            <button className={styles.delete} type="button"></button>
        </div>
    )
}

export default Item;