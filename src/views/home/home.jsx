/* React */
import React, { useState, useEffect } from "react";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { addInvoice } from "../../redux/invoice/invoice_slice";

/* Components */
import HomeHeader from "./components/home_header/home_header.component";
import List from "../global/list/list";
import InvoiceItem from "./components/invoice_item/invoice_item.component";
import NoInvoice from "./components/no_invoice/no_invoice.component";
import Slider from "../global/slider/slider";
import InvoiceForm from "./components/invoice_form/invoice_form.component";

/* CSS */
import styles from "./home.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    const [invoices, setInvoices] = useState([]);
    const [status_filters, setStatusFilters] = useState([]);
    const { invoice_list } = useSelector(state => state.invoice);

    const [is_show_invoice_form, setShowInVoiceForm] = useState(false);

    useEffect(() => {
        setInvoices(invoice_list);
    }, [invoice_list]);

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
                onNewInvoiceClick={() => setShowInVoiceForm(true)}
            />
            <List 
                className={styles.invoice_list}
                items={invoices}
                resource_name={"invoice"}
                itemComponent={InvoiceItem}
                noItemComponent={NoInvoice}
            />
            <Slider 
                is_show={is_show_invoice_form}
                onClose={() => setShowInVoiceForm(false)}
            >
                <InvoiceForm 
                    onClose={() => setShowInVoiceForm(false)} 
                    onFormSubmit={() => dispatch(addInvoice())}
                />
            </Slider>
        </div>
    )
}

export default Home;