import React from "react";

import styles from "./item.module.scss";

const Item = ({item}) => {

    const { name, quantity, price, total } = item;

    return (    
        <div className={styles.item}>
            <p className={styles.name}>{name}</p>
            <p className={styles.quantity}>{quantity}</p>
            <p className={styles.price}>{price}</p>
            <p className={styles.total}>{total}</p>
        </div>
    )
}

export default Item;