/* PLUGINS */
import { Modal } from "react-bootstrap";

/* CSS */
import styles from "./delete.modal.module.scss";

function DeleteModal({show, onHide, onSubmit}){
    return (
        <Modal 
            show={show} 
            onHide={onHide}
            className={styles.delete_modal}
            centered
        >
            <Modal.Body>
                <h4>Confirm Deletion</h4>
                <p>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
                <div className={styles.action_container}>
                    <button 
                        type="button" 
                        className={styles.btn_cancel}
                        onClick={onHide}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className={styles.btn_delete}
                        onClick={onSubmit}
                    >
                        Delete
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteModal;