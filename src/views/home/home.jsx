/* React */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

/* Components */
import HomeHeader from "./components/home_header/home_header.component";
import List from "../global/list/list";
import InvoiceItem from "./components/invoice_item/invoice_item.component";
import NoInvoice from "./components/no_invoice/no_invoice.component";
import Slider from "../global/slider/slider";
import NewInvoiceForm from "./components/new_invoice_form/new_invoice_form.component";

/* CSS */
import styles from "./home.module.scss";

const Home = () => {

    const [invoices, setInvoices] = useState([]);
    const [status_filters, setStatusFilters] = useState([]);
    const { invoice_list } = useSelector(state => state.invoice);

    const [is_show_new_voice, setShowNewVoice] = useState(false);

    useEffect(() => {
        setInvoices(invoice_list);
    }, []);

    const handleStatusFilterChange = (filters) => {
        let new_invoice_list = filters.length
            ? invoice_list.filter(invoice => filters.includes(invoice.status))
            : invoice_list;

        setStatusFilters(filters);
        setInvoices(new_invoice_list);
    }

    return (
        <div id={styles.home}>
            <HomeHeader 
                status_filters={status_filters} 
                onStatusFilterChange={handleStatusFilterChange} 
                onNewInvoiceClick={() => setShowNewVoice(true)}
            />
            <List 
                className={styles.invoice_list}
                items={invoices}
                resource_name={"invoice"}
                itemComponent={InvoiceItem}
                noItemComponent={NoInvoice}
            />
            <Slider 
                is_show={is_show_new_voice}
                onClose={() => setShowNewVoice(false)}
            >
                <NewInvoiceForm />
            </Slider>
        </div>
    )
}

export default Home;