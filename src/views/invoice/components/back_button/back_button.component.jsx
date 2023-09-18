import React from "react";
import { Link } from "react-router-dom";
import styles from "./back_button.module.scss";


const BackButton = () => {
    return (
        <Link 
            to={"/"}
            className={styles.back_btn} 
            type="button">
                <span className={styles.back_icon}></span>
                Go back
        </Link>

    )
}

export default BackButton;