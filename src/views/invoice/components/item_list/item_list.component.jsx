/* React */
import React from "react";

/* Components */
import List from "../../../global/list/list";
import Item from "../item/item.component";

/* CSS */
import styles from "./item_list.module.scss";

const ItemList = ({items}) => {
    return(
        <div className={styles.item_list}>
            <div className={styles.list_header}>
                <p className={styles.item_name}>Item Name</p>
                <p className={styles.quantity}>QTY.</p>
                <p className={styles.price}>Price</p>
                <p className={styles.total}>Total</p>
            </div>
            <List 
                items={items}
                itemComponent={Item}     
            />
        </div>
    )
}

export default ItemList;