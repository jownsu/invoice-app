/* React */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { selectInvoice, deleteInvoice } from "../../redux/invoice/invoice_slice";

/* Components */
import BackButton from "./components/back_button/back_button.component";
import InvoiceHeader from "./components/invoice_header/invoice_header.component";
import InvoiceInfo from "./components/invoice_info/invoice_info.component";
import Slider from "../global/slider/slider";
import InvoiceForm from "../home/components/invoice_form/invoice_form.component";
import DeleteModal from "./modals/delete.modal";

/* CSS */
import styles from "./invoice.module.scss";

const Invoice = () => {
    const navigate = useNavigate();
    const { invoice_id } = useParams();
    const dispatch = useDispatch();
    const [is_show_invoice_form, setIsShowInvoiceForm] = useState(false);
    const [is_show_delete_nodal, setIsShowDeleteModal] = useState(false);

    useEffect(() => {
        dispatch(selectInvoice({invoice_id: invoice_id}));
    }, []);

    const handleDelete = () => {
        dispatch(deleteInvoice({invoice_id}));
        setIsShowDeleteModal(false);
        navigate("/");
    }

    const { selected_invoice } = useSelector(state => state.invoice);

    return(
        <div id={styles.invoice}>
            <BackButton />
            <InvoiceHeader 
                invoice_status={selected_invoice.status}
                onEditClick={() => setIsShowInvoiceForm(true)}     
                onDeleteClick={() => setIsShowDeleteModal(true)}
            />
            <InvoiceInfo invoice={selected_invoice} />
            <Slider 
                is_show={is_show_invoice_form}
                onClose={() => setIsShowInvoiceForm(false)}
            >
                <InvoiceForm 
                    onClose={() => setIsShowInvoiceForm(false)} 
                    is_edit
                />
            </Slider>
            <DeleteModal 
                show={is_show_delete_nodal}
                onHide={() => setIsShowDeleteModal(false)}
                onSubmit={handleDelete}
            />
        </div>
    )
}

export default Invoice;