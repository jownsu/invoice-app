/* React */
import React from "react";
import { useSelector } from "react-redux";

/* Components */
import HomeHeader from "./components/home_header/home_header.component";
import List from "../global/list/list";
import InvoiceItem from "./components/invoice_item/invoice_item.component";
import NoInvoice from "./components/no_invoice/no_invoice.component";

/* CSS */
import styles from "./home.module.scss";

const Home = () => {

    const { invoice_list } = useSelector(state => state.invoice);

    return (
        <div id={styles.home}>
            <HomeHeader />
            <List 
                className={styles.invoice_list}
                items={invoice_list}
                resource_name={"invoice"}
                itemComponent={InvoiceItem}
                noItemComponent={NoInvoice}
            />
        </div>
    )
}

export default Home;