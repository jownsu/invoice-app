/* React */
import React from "react";

/* Components */
import HomeHeader from "./components/home_header/home_header.component";
import List from "../global/list/list";
import InvoiceItem from "./components/invoice_item/invoice_item.component";

/* CSS */
import styles from "./home.module.scss";

/* Dummy data */
import data from "../../assets/data.json";

const Home = () => {
    return (
        <div id={styles.home}>
            <HomeHeader />
            <List 
                className={styles.invoice_list}
                items={data}
                resource_name={"invoice"}
                itemComponent={InvoiceItem}
            />
        </div>
    )
}

export default Home;